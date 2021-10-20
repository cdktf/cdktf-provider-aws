// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* App Mesh
*/
export namespace AppMesh {
  export interface AppmeshGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#mesh_name AppmeshGatewayRoute#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#mesh_owner AppmeshGatewayRoute#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#name AppmeshGatewayRoute#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#tags AppmeshGatewayRoute#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#tags_all AppmeshGatewayRoute#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}
    */
    readonly virtualGatewayName: string;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#spec AppmeshGatewayRoute#spec}
    */
    readonly spec: AppmeshGatewayRouteSpec;
  }
  export interface AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
  }

  function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
    }
  }

  export class AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // virtual_service_name - computed: false, optional: false, required: true
    private _virtualServiceName?: string; 
    public get virtualServiceName() {
      return this.getStringAttribute('virtual_service_name');
    }
    public set virtualServiceName(value: string) {
      this._virtualServiceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualServiceNameInput() {
      return this._virtualServiceName
    }
  }
  export interface AppmeshGatewayRouteSpecGrpcRouteActionTarget {
    /**
    * virtual_service block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService;
  }

  function appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_service: appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
    }
  }

  export class AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // virtual_service - computed: false, optional: false, required: true
    private _virtualService?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService; 
    private __virtualServiceOutput = new AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference(this as any, "virtual_service", true);
    public get virtualService() {
      return this.__virtualServiceOutput;
    }
    public putVirtualService(value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService) {
      this._virtualService = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualServiceInput() {
      return this._virtualService
    }
  }
  export interface AppmeshGatewayRouteSpecGrpcRouteAction {
    /**
    * target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTarget;
  }

  function appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionOutputReference | AppmeshGatewayRouteSpecGrpcRouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      target: appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct!.target),
    }
  }

  export class AppmeshGatewayRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // target - computed: false, optional: false, required: true
    private _target?: AppmeshGatewayRouteSpecGrpcRouteActionTarget; 
    private __targetOutput = new AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference(this as any, "target", true);
    public get target() {
      return this.__targetOutput;
    }
    public putTarget(value: AppmeshGatewayRouteSpecGrpcRouteActionTarget) {
      this._target = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
      return this._target
    }
  }
  export interface AppmeshGatewayRouteSpecGrpcRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#service_name AppmeshGatewayRoute#service_name}
    */
    readonly serviceName: string;
  }

  function appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference | AppmeshGatewayRouteSpecGrpcRouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      service_name: cdktf.stringToTerraform(struct!.serviceName),
    }
  }

  export class AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // service_name - computed: false, optional: false, required: true
    private _serviceName?: string; 
    public get serviceName() {
      return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
      this._serviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
      return this._serviceName
    }
  }
  export interface AppmeshGatewayRouteSpecGrpcRoute {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecGrpcRouteAction;
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecGrpcRouteMatch;
  }

  function appmeshGatewayRouteSpecGrpcRouteToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteOutputReference | AppmeshGatewayRouteSpecGrpcRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct!.action),
      match: appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct!.match),
    }
  }

  export class AppmeshGatewayRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // action - computed: false, optional: false, required: true
    private _action?: AppmeshGatewayRouteSpecGrpcRouteAction; 
    private __actionOutput = new AppmeshGatewayRouteSpecGrpcRouteActionOutputReference(this as any, "action", true);
    public get action() {
      return this.__actionOutput;
    }
    public putAction(value: AppmeshGatewayRouteSpecGrpcRouteAction) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // match - computed: false, optional: false, required: true
    private _match?: AppmeshGatewayRouteSpecGrpcRouteMatch; 
    private __matchOutput = new AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference(this as any, "match", true);
    public get match() {
      return this.__matchOutput;
    }
    public putMatch(value: AppmeshGatewayRouteSpecGrpcRouteMatch) {
      this._match = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
      return this._match
    }
  }
  export interface AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
  }

  function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
    }
  }

  export class AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // virtual_service_name - computed: false, optional: false, required: true
    private _virtualServiceName?: string; 
    public get virtualServiceName() {
      return this.getStringAttribute('virtual_service_name');
    }
    public set virtualServiceName(value: string) {
      this._virtualServiceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualServiceNameInput() {
      return this._virtualServiceName
    }
  }
  export interface AppmeshGatewayRouteSpecHttp2RouteActionTarget {
    /**
    * virtual_service block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService;
  }

  function appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_service: appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
    }
  }

  export class AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // virtual_service - computed: false, optional: false, required: true
    private _virtualService?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService; 
    private __virtualServiceOutput = new AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference(this as any, "virtual_service", true);
    public get virtualService() {
      return this.__virtualServiceOutput;
    }
    public putVirtualService(value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService) {
      this._virtualService = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualServiceInput() {
      return this._virtualService
    }
  }
  export interface AppmeshGatewayRouteSpecHttp2RouteAction {
    /**
    * target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTarget;
  }

  function appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionOutputReference | AppmeshGatewayRouteSpecHttp2RouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      target: appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct!.target),
    }
  }

  export class AppmeshGatewayRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // target - computed: false, optional: false, required: true
    private _target?: AppmeshGatewayRouteSpecHttp2RouteActionTarget; 
    private __targetOutput = new AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference(this as any, "target", true);
    public get target() {
      return this.__targetOutput;
    }
    public putTarget(value: AppmeshGatewayRouteSpecHttp2RouteActionTarget) {
      this._target = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
      return this._target
    }
  }
  export interface AppmeshGatewayRouteSpecHttp2RouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix: string;
  }

  function appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }

  export class AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // prefix - computed: false, optional: false, required: true
    private _prefix?: string; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
      this._prefix = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }
  }
  export interface AppmeshGatewayRouteSpecHttp2Route {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecHttp2RouteAction;
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecHttp2RouteMatch;
  }

  function appmeshGatewayRouteSpecHttp2RouteToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteOutputReference | AppmeshGatewayRouteSpecHttp2Route): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct!.action),
      match: appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct!.match),
    }
  }

  export class AppmeshGatewayRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // action - computed: false, optional: false, required: true
    private _action?: AppmeshGatewayRouteSpecHttp2RouteAction; 
    private __actionOutput = new AppmeshGatewayRouteSpecHttp2RouteActionOutputReference(this as any, "action", true);
    public get action() {
      return this.__actionOutput;
    }
    public putAction(value: AppmeshGatewayRouteSpecHttp2RouteAction) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // match - computed: false, optional: false, required: true
    private _match?: AppmeshGatewayRouteSpecHttp2RouteMatch; 
    private __matchOutput = new AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference(this as any, "match", true);
    public get match() {
      return this.__matchOutput;
    }
    public putMatch(value: AppmeshGatewayRouteSpecHttp2RouteMatch) {
      this._match = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
      return this._match
    }
  }
  export interface AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
  }

  function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
    }
  }

  export class AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // virtual_service_name - computed: false, optional: false, required: true
    private _virtualServiceName?: string; 
    public get virtualServiceName() {
      return this.getStringAttribute('virtual_service_name');
    }
    public set virtualServiceName(value: string) {
      this._virtualServiceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualServiceNameInput() {
      return this._virtualServiceName
    }
  }
  export interface AppmeshGatewayRouteSpecHttpRouteActionTarget {
    /**
    * virtual_service block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService;
  }

  function appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_service: appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
    }
  }

  export class AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // virtual_service - computed: false, optional: false, required: true
    private _virtualService?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService; 
    private __virtualServiceOutput = new AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference(this as any, "virtual_service", true);
    public get virtualService() {
      return this.__virtualServiceOutput;
    }
    public putVirtualService(value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService) {
      this._virtualService = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualServiceInput() {
      return this._virtualService
    }
  }
  export interface AppmeshGatewayRouteSpecHttpRouteAction {
    /**
    * target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecHttpRouteActionTarget;
  }

  function appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionOutputReference | AppmeshGatewayRouteSpecHttpRouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      target: appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct!.target),
    }
  }

  export class AppmeshGatewayRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // target - computed: false, optional: false, required: true
    private _target?: AppmeshGatewayRouteSpecHttpRouteActionTarget; 
    private __targetOutput = new AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference(this as any, "target", true);
    public get target() {
      return this.__targetOutput;
    }
    public putTarget(value: AppmeshGatewayRouteSpecHttpRouteActionTarget) {
      this._target = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
      return this._target
    }
  }
  export interface AppmeshGatewayRouteSpecHttpRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix: string;
  }

  function appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }

  export class AppmeshGatewayRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // prefix - computed: false, optional: false, required: true
    private _prefix?: string; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
      this._prefix = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }
  }
  export interface AppmeshGatewayRouteSpecHttpRoute {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecHttpRouteAction;
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecHttpRouteMatch;
  }

  function appmeshGatewayRouteSpecHttpRouteToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteOutputReference | AppmeshGatewayRouteSpecHttpRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct!.action),
      match: appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct!.match),
    }
  }

  export class AppmeshGatewayRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // action - computed: false, optional: false, required: true
    private _action?: AppmeshGatewayRouteSpecHttpRouteAction; 
    private __actionOutput = new AppmeshGatewayRouteSpecHttpRouteActionOutputReference(this as any, "action", true);
    public get action() {
      return this.__actionOutput;
    }
    public putAction(value: AppmeshGatewayRouteSpecHttpRouteAction) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // match - computed: false, optional: false, required: true
    private _match?: AppmeshGatewayRouteSpecHttpRouteMatch; 
    private __matchOutput = new AppmeshGatewayRouteSpecHttpRouteMatchOutputReference(this as any, "match", true);
    public get match() {
      return this.__matchOutput;
    }
    public putMatch(value: AppmeshGatewayRouteSpecHttpRouteMatch) {
      this._match = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
      return this._match
    }
  }
  export interface AppmeshGatewayRouteSpec {
    /**
    * grpc_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#grpc_route AppmeshGatewayRoute#grpc_route}
    */
    readonly grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute;
    /**
    * http2_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http2_route AppmeshGatewayRoute#http2_route}
    */
    readonly http2Route?: AppmeshGatewayRouteSpecHttp2Route;
    /**
    * http_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http_route AppmeshGatewayRoute#http_route}
    */
    readonly httpRoute?: AppmeshGatewayRouteSpecHttpRoute;
  }

  function appmeshGatewayRouteSpecToTerraform(struct?: AppmeshGatewayRouteSpecOutputReference | AppmeshGatewayRouteSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      grpc_route: appmeshGatewayRouteSpecGrpcRouteToTerraform(struct!.grpcRoute),
      http2_route: appmeshGatewayRouteSpecHttp2RouteToTerraform(struct!.http2Route),
      http_route: appmeshGatewayRouteSpecHttpRouteToTerraform(struct!.httpRoute),
    }
  }

  export class AppmeshGatewayRouteSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // grpc_route - computed: false, optional: true, required: false
    private _grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute | undefined; 
    private __grpcRouteOutput = new AppmeshGatewayRouteSpecGrpcRouteOutputReference(this as any, "grpc_route", true);
    public get grpcRoute() {
      return this.__grpcRouteOutput;
    }
    public putGrpcRoute(value: AppmeshGatewayRouteSpecGrpcRoute | undefined) {
      this._grpcRoute = value;
    }
    public resetGrpcRoute() {
      this._grpcRoute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grpcRouteInput() {
      return this._grpcRoute
    }

    // http2_route - computed: false, optional: true, required: false
    private _http2Route?: AppmeshGatewayRouteSpecHttp2Route | undefined; 
    private __http2RouteOutput = new AppmeshGatewayRouteSpecHttp2RouteOutputReference(this as any, "http2_route", true);
    public get http2Route() {
      return this.__http2RouteOutput;
    }
    public putHttp2Route(value: AppmeshGatewayRouteSpecHttp2Route | undefined) {
      this._http2Route = value;
    }
    public resetHttp2Route() {
      this._http2Route = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get http2RouteInput() {
      return this._http2Route
    }

    // http_route - computed: false, optional: true, required: false
    private _httpRoute?: AppmeshGatewayRouteSpecHttpRoute | undefined; 
    private __httpRouteOutput = new AppmeshGatewayRouteSpecHttpRouteOutputReference(this as any, "http_route", true);
    public get httpRoute() {
      return this.__httpRouteOutput;
    }
    public putHttpRoute(value: AppmeshGatewayRouteSpecHttpRoute | undefined) {
      this._httpRoute = value;
    }
    public resetHttpRoute() {
      this._httpRoute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpRouteInput() {
      return this._httpRoute
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route}
  */
  export class AppmeshGatewayRoute extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_gateway_route";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshGatewayRouteConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshGatewayRouteConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_gateway_route',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._meshName = config.meshName;
      this._meshOwner = config.meshOwner;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._virtualGatewayName = config.virtualGatewayName;
      this._spec = config.spec;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
    }

    // mesh_name - computed: false, optional: false, required: true
    private _meshName?: string; 
    public get meshName() {
      return this.getStringAttribute('mesh_name');
    }
    public set meshName(value: string) {
      this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get meshNameInput() {
      return this._meshName
    }

    // mesh_owner - computed: true, optional: true, required: false
    private _meshOwner?: string | undefined; 
    public get meshOwner() {
      return this.getStringAttribute('mesh_owner');
    }
    public set meshOwner(value: string | undefined) {
      this._meshOwner = value;
    }
    public resetMeshOwner() {
      this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get meshOwnerInput() {
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // resource_owner - computed: true, optional: false, required: false
    public get resourceOwner() {
      return this.getStringAttribute('resource_owner');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // virtual_gateway_name - computed: false, optional: false, required: true
    private _virtualGatewayName?: string; 
    public get virtualGatewayName() {
      return this.getStringAttribute('virtual_gateway_name');
    }
    public set virtualGatewayName(value: string) {
      this._virtualGatewayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualGatewayNameInput() {
      return this._virtualGatewayName
    }

    // spec - computed: false, optional: false, required: true
    private _spec?: AppmeshGatewayRouteSpec; 
    private __specOutput = new AppmeshGatewayRouteSpecOutputReference(this as any, "spec", true);
    public get spec() {
      return this.__specOutput;
    }
    public putSpec(value: AppmeshGatewayRouteSpec) {
      this._spec = value;
    }
    // Temporarily expose input value. Use with caution.
    public get specInput() {
      return this._spec
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        mesh_name: cdktf.stringToTerraform(this._meshName),
        mesh_owner: cdktf.stringToTerraform(this._meshOwner),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        virtual_gateway_name: cdktf.stringToTerraform(this._virtualGatewayName),
        spec: appmeshGatewayRouteSpecToTerraform(this._spec),
      };
    }
  }
  export interface AppmeshMeshConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#name AppmeshMesh#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#tags AppmeshMesh#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#tags_all AppmeshMesh#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#spec AppmeshMesh#spec}
    */
    readonly spec?: AppmeshMeshSpec;
  }
  export interface AppmeshMeshSpecEgressFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#type AppmeshMesh#type}
    */
    readonly type?: string;
  }

  function appmeshMeshSpecEgressFilterToTerraform(struct?: AppmeshMeshSpecEgressFilterOutputReference | AppmeshMeshSpecEgressFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class AppmeshMeshSpecEgressFilterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface AppmeshMeshSpec {
    /**
    * egress_filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#egress_filter AppmeshMesh#egress_filter}
    */
    readonly egressFilter?: AppmeshMeshSpecEgressFilter;
  }

  function appmeshMeshSpecToTerraform(struct?: AppmeshMeshSpecOutputReference | AppmeshMeshSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      egress_filter: appmeshMeshSpecEgressFilterToTerraform(struct!.egressFilter),
    }
  }

  export class AppmeshMeshSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // egress_filter - computed: false, optional: true, required: false
    private _egressFilter?: AppmeshMeshSpecEgressFilter | undefined; 
    private __egressFilterOutput = new AppmeshMeshSpecEgressFilterOutputReference(this as any, "egress_filter", true);
    public get egressFilter() {
      return this.__egressFilterOutput;
    }
    public putEgressFilter(value: AppmeshMeshSpecEgressFilter | undefined) {
      this._egressFilter = value;
    }
    public resetEgressFilter() {
      this._egressFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressFilterInput() {
      return this._egressFilter
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html aws_appmesh_mesh}
  */
  export class AppmeshMesh extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_mesh";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html aws_appmesh_mesh} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshMeshConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshMeshConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_mesh',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._spec = config.spec;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
    }

    // mesh_owner - computed: true, optional: false, required: false
    public get meshOwner() {
      return this.getStringAttribute('mesh_owner');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // resource_owner - computed: true, optional: false, required: false
    public get resourceOwner() {
      return this.getStringAttribute('resource_owner');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // spec - computed: false, optional: true, required: false
    private _spec?: AppmeshMeshSpec | undefined; 
    private __specOutput = new AppmeshMeshSpecOutputReference(this as any, "spec", true);
    public get spec() {
      return this.__specOutput;
    }
    public putSpec(value: AppmeshMeshSpec | undefined) {
      this._spec = value;
    }
    public resetSpec() {
      this._spec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get specInput() {
      return this._spec
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        spec: appmeshMeshSpecToTerraform(this._spec),
      };
    }
  }
  export interface AppmeshRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#mesh_name AppmeshRoute#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#mesh_owner AppmeshRoute#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tags AppmeshRoute#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tags_all AppmeshRoute#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_router_name AppmeshRoute#virtual_router_name}
    */
    readonly virtualRouterName: string;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#spec AppmeshRoute#spec}
    */
    readonly spec: AppmeshRouteSpec;
  }
  export interface AppmeshRouteSpecGrpcRouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
    */
    readonly weight: number;
  }

  function appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionWeightedTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }

  export interface AppmeshRouteSpecGrpcRouteAction {
    /**
    * weighted_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
  }

  function appmeshRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionOutputReference | AppmeshRouteSpecGrpcRouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      weighted_target: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
    }
  }

  export class AppmeshRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // weighted_target - computed: false, optional: false, required: true
    private _weightedTarget?: AppmeshRouteSpecGrpcRouteActionWeightedTarget[]; 
    public get weightedTarget() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('weighted_target') as any;
    }
    public set weightedTarget(value: AppmeshRouteSpecGrpcRouteActionWeightedTarget[]) {
      this._weightedTarget = value;
    }
    // Temporarily expose input value. Use with caution.
    public get weightedTargetInput() {
      return this._weightedTarget
    }
  }
  export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
    */
    readonly end: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
    */
    readonly start: number;
  }

  function appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      end: cdktf.numberToTerraform(struct!.end),
      start: cdktf.numberToTerraform(struct!.start),
    }
  }

  export class AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // end - computed: false, optional: false, required: true
    private _end?: number; 
    public get end() {
      return this.getNumberAttribute('end');
    }
    public set end(value: number) {
      this._end = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endInput() {
      return this._end
    }

    // start - computed: false, optional: false, required: true
    private _start?: number; 
    public get start() {
      return this.getNumberAttribute('start');
    }
    public set start(value: number) {
      this._start = value;
    }
    // Temporarily expose input value. Use with caution.
    public get startInput() {
      return this._start
    }
  }
  export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
    */
    readonly suffix?: string;
    /**
    * range block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
    */
    readonly range?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange;
  }

  function appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      exact: cdktf.stringToTerraform(struct!.exact),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      regex: cdktf.stringToTerraform(struct!.regex),
      suffix: cdktf.stringToTerraform(struct!.suffix),
      range: appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct!.range),
    }
  }

  export class AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // exact - computed: false, optional: true, required: false
    private _exact?: string | undefined; 
    public get exact() {
      return this.getStringAttribute('exact');
    }
    public set exact(value: string | undefined) {
      this._exact = value;
    }
    public resetExact() {
      this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exactInput() {
      return this._exact
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // regex - computed: false, optional: true, required: false
    private _regex?: string | undefined; 
    public get regex() {
      return this.getStringAttribute('regex');
    }
    public set regex(value: string | undefined) {
      this._regex = value;
    }
    public resetRegex() {
      this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexInput() {
      return this._regex
    }

    // suffix - computed: false, optional: true, required: false
    private _suffix?: string | undefined; 
    public get suffix() {
      return this.getStringAttribute('suffix');
    }
    public set suffix(value: string | undefined) {
      this._suffix = value;
    }
    public resetSuffix() {
      this._suffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suffixInput() {
      return this._suffix
    }

    // range - computed: false, optional: true, required: false
    private _range?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined; 
    private __rangeOutput = new AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference(this as any, "range", true);
    public get range() {
      return this.__rangeOutput;
    }
    public putRange(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined) {
      this._range = value;
    }
    public resetRange() {
      this._range = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeInput() {
      return this._range
    }
  }
  export interface AppmeshRouteSpecGrpcRouteMatchMetadata {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
    */
    readonly invert?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecGrpcRouteMatchMetadataMatch;
  }

  function appmeshRouteSpecGrpcRouteMatchMetadataToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadata): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      invert: cdktf.booleanToTerraform(struct!.invert),
      name: cdktf.stringToTerraform(struct!.name),
      match: appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct!.match),
    }
  }

  export interface AppmeshRouteSpecGrpcRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method_name AppmeshRoute#method_name}
    */
    readonly methodName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#service_name AppmeshRoute#service_name}
    */
    readonly serviceName?: string;
    /**
    * metadata block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#metadata AppmeshRoute#metadata}
    */
    readonly metadata?: AppmeshRouteSpecGrpcRouteMatchMetadata[];
  }

  function appmeshRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchOutputReference | AppmeshRouteSpecGrpcRouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      method_name: cdktf.stringToTerraform(struct!.methodName),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      service_name: cdktf.stringToTerraform(struct!.serviceName),
      metadata: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataToTerraform)(struct!.metadata),
    }
  }

  export class AppmeshRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // method_name - computed: false, optional: true, required: false
    private _methodName?: string | undefined; 
    public get methodName() {
      return this.getStringAttribute('method_name');
    }
    public set methodName(value: string | undefined) {
      this._methodName = value;
    }
    public resetMethodName() {
      this._methodName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get methodNameInput() {
      return this._methodName
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // service_name - computed: false, optional: true, required: false
    private _serviceName?: string | undefined; 
    public get serviceName() {
      return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string | undefined) {
      this._serviceName = value;
    }
    public resetServiceName() {
      this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
      return this._serviceName
    }

    // metadata - computed: false, optional: true, required: false
    private _metadata?: AppmeshRouteSpecGrpcRouteMatchMetadata[] | undefined; 
    public get metadata() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('metadata') as any;
    }
    public set metadata(value: AppmeshRouteSpecGrpcRouteMatchMetadata[] | undefined) {
      this._metadata = value;
    }
    public resetMetadata() {
      this._metadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataInput() {
      return this._metadata
    }
  }
  export interface AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
  }

  function appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshRouteSpecGrpcRouteRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#grpc_retry_events AppmeshRoute#grpc_retry_events}
    */
    readonly grpcRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
    */
    readonly httpRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
    */
    readonly maxRetries: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
    */
    readonly tcpRetryEvents?: string[];
    /**
    * per_retry_timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
    */
    readonly perRetryTimeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout;
  }

  function appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      grpc_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.grpcRetryEvents),
      http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
      max_retries: cdktf.numberToTerraform(struct!.maxRetries),
      tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
      per_retry_timeout: appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
    }
  }

  export class AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // grpc_retry_events - computed: false, optional: true, required: false
    private _grpcRetryEvents?: string[] | undefined; 
    public get grpcRetryEvents() {
      return this.getListAttribute('grpc_retry_events');
    }
    public set grpcRetryEvents(value: string[] | undefined) {
      this._grpcRetryEvents = value;
    }
    public resetGrpcRetryEvents() {
      this._grpcRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grpcRetryEventsInput() {
      return this._grpcRetryEvents
    }

    // http_retry_events - computed: false, optional: true, required: false
    private _httpRetryEvents?: string[] | undefined; 
    public get httpRetryEvents() {
      return this.getListAttribute('http_retry_events');
    }
    public set httpRetryEvents(value: string[] | undefined) {
      this._httpRetryEvents = value;
    }
    public resetHttpRetryEvents() {
      this._httpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpRetryEventsInput() {
      return this._httpRetryEvents
    }

    // max_retries - computed: false, optional: false, required: true
    private _maxRetries?: number; 
    public get maxRetries() {
      return this.getNumberAttribute('max_retries');
    }
    public set maxRetries(value: number) {
      this._maxRetries = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRetriesInput() {
      return this._maxRetries
    }

    // tcp_retry_events - computed: false, optional: true, required: false
    private _tcpRetryEvents?: string[] | undefined; 
    public get tcpRetryEvents() {
      return this.getListAttribute('tcp_retry_events');
    }
    public set tcpRetryEvents(value: string[] | undefined) {
      this._tcpRetryEvents = value;
    }
    public resetTcpRetryEvents() {
      this._tcpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcpRetryEventsInput() {
      return this._tcpRetryEvents
    }

    // per_retry_timeout - computed: false, optional: false, required: true
    private _perRetryTimeout?: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout; 
    private __perRetryTimeoutOutput = new AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference(this as any, "per_retry_timeout", true);
    public get perRetryTimeout() {
      return this.__perRetryTimeoutOutput;
    }
    public putPerRetryTimeout(value: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout) {
      this._perRetryTimeout = value;
    }
    // Temporarily expose input value. Use with caution.
    public get perRetryTimeoutInput() {
      return this._perRetryTimeout
    }
  }
  export interface AppmeshRouteSpecGrpcRouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
  }

  function appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference | AppmeshRouteSpecGrpcRouteTimeoutIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshRouteSpecGrpcRouteTimeoutPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
  }

  function appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecGrpcRouteTimeoutPerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshRouteSpecGrpcRouteTimeout {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle;
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest;
  }

  function appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutOutputReference | AppmeshRouteSpecGrpcRouteTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      idle: appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct!.idle),
      per_request: appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct!.perRequest),
    }
  }

  export class AppmeshRouteSpecGrpcRouteTimeoutOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // idle - computed: false, optional: true, required: false
    private _idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle | undefined; 
    private __idleOutput = new AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference(this as any, "idle", true);
    public get idle() {
      return this.__idleOutput;
    }
    public putIdle(value: AppmeshRouteSpecGrpcRouteTimeoutIdle | undefined) {
      this._idle = value;
    }
    public resetIdle() {
      this._idle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleInput() {
      return this._idle
    }

    // per_request - computed: false, optional: true, required: false
    private _perRequest?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined; 
    private __perRequestOutput = new AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference(this as any, "per_request", true);
    public get perRequest() {
      return this.__perRequestOutput;
    }
    public putPerRequest(value: AppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined) {
      this._perRequest = value;
    }
    public resetPerRequest() {
      this._perRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perRequestInput() {
      return this._perRequest
    }
  }
  export interface AppmeshRouteSpecGrpcRoute {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecGrpcRouteAction;
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecGrpcRouteMatch;
    /**
    * retry_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecGrpcRouteRetryPolicy;
    /**
    * timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecGrpcRouteTimeout;
  }

  function appmeshRouteSpecGrpcRouteToTerraform(struct?: AppmeshRouteSpecGrpcRouteOutputReference | AppmeshRouteSpecGrpcRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: appmeshRouteSpecGrpcRouteActionToTerraform(struct!.action),
      match: appmeshRouteSpecGrpcRouteMatchToTerraform(struct!.match),
      retry_policy: appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct!.retryPolicy),
      timeout: appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct!.timeout),
    }
  }

  export class AppmeshRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // action - computed: false, optional: false, required: true
    private _action?: AppmeshRouteSpecGrpcRouteAction; 
    private __actionOutput = new AppmeshRouteSpecGrpcRouteActionOutputReference(this as any, "action", true);
    public get action() {
      return this.__actionOutput;
    }
    public putAction(value: AppmeshRouteSpecGrpcRouteAction) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // match - computed: false, optional: true, required: false
    private _match?: AppmeshRouteSpecGrpcRouteMatch | undefined; 
    private __matchOutput = new AppmeshRouteSpecGrpcRouteMatchOutputReference(this as any, "match", true);
    public get match() {
      return this.__matchOutput;
    }
    public putMatch(value: AppmeshRouteSpecGrpcRouteMatch | undefined) {
      this._match = value;
    }
    public resetMatch() {
      this._match = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
      return this._match
    }

    // retry_policy - computed: false, optional: true, required: false
    private _retryPolicy?: AppmeshRouteSpecGrpcRouteRetryPolicy | undefined; 
    private __retryPolicyOutput = new AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference(this as any, "retry_policy", true);
    public get retryPolicy() {
      return this.__retryPolicyOutput;
    }
    public putRetryPolicy(value: AppmeshRouteSpecGrpcRouteRetryPolicy | undefined) {
      this._retryPolicy = value;
    }
    public resetRetryPolicy() {
      this._retryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryPolicyInput() {
      return this._retryPolicy
    }

    // timeout - computed: false, optional: true, required: false
    private _timeout?: AppmeshRouteSpecGrpcRouteTimeout | undefined; 
    private __timeoutOutput = new AppmeshRouteSpecGrpcRouteTimeoutOutputReference(this as any, "timeout", true);
    public get timeout() {
      return this.__timeoutOutput;
    }
    public putTimeout(value: AppmeshRouteSpecGrpcRouteTimeout | undefined) {
      this._timeout = value;
    }
    public resetTimeout() {
      this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
      return this._timeout
    }
  }
  export interface AppmeshRouteSpecHttp2RouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
    */
    readonly weight: number;
  }

  function appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionWeightedTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }

  export interface AppmeshRouteSpecHttp2RouteAction {
    /**
    * weighted_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
  }

  function appmeshRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionOutputReference | AppmeshRouteSpecHttp2RouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      weighted_target: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
    }
  }

  export class AppmeshRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // weighted_target - computed: false, optional: false, required: true
    private _weightedTarget?: AppmeshRouteSpecHttp2RouteActionWeightedTarget[]; 
    public get weightedTarget() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('weighted_target') as any;
    }
    public set weightedTarget(value: AppmeshRouteSpecHttp2RouteActionWeightedTarget[]) {
      this._weightedTarget = value;
    }
    // Temporarily expose input value. Use with caution.
    public get weightedTargetInput() {
      return this._weightedTarget
    }
  }
  export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
    */
    readonly end: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
    */
    readonly start: number;
  }

  function appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      end: cdktf.numberToTerraform(struct!.end),
      start: cdktf.numberToTerraform(struct!.start),
    }
  }

  export class AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // end - computed: false, optional: false, required: true
    private _end?: number; 
    public get end() {
      return this.getNumberAttribute('end');
    }
    public set end(value: number) {
      this._end = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endInput() {
      return this._end
    }

    // start - computed: false, optional: false, required: true
    private _start?: number; 
    public get start() {
      return this.getNumberAttribute('start');
    }
    public set start(value: number) {
      this._start = value;
    }
    // Temporarily expose input value. Use with caution.
    public get startInput() {
      return this._start
    }
  }
  export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
    */
    readonly suffix?: string;
    /**
    * range block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
    */
    readonly range?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange;
  }

  function appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      exact: cdktf.stringToTerraform(struct!.exact),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      regex: cdktf.stringToTerraform(struct!.regex),
      suffix: cdktf.stringToTerraform(struct!.suffix),
      range: appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct!.range),
    }
  }

  export class AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // exact - computed: false, optional: true, required: false
    private _exact?: string | undefined; 
    public get exact() {
      return this.getStringAttribute('exact');
    }
    public set exact(value: string | undefined) {
      this._exact = value;
    }
    public resetExact() {
      this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exactInput() {
      return this._exact
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // regex - computed: false, optional: true, required: false
    private _regex?: string | undefined; 
    public get regex() {
      return this.getStringAttribute('regex');
    }
    public set regex(value: string | undefined) {
      this._regex = value;
    }
    public resetRegex() {
      this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexInput() {
      return this._regex
    }

    // suffix - computed: false, optional: true, required: false
    private _suffix?: string | undefined; 
    public get suffix() {
      return this.getStringAttribute('suffix');
    }
    public set suffix(value: string | undefined) {
      this._suffix = value;
    }
    public resetSuffix() {
      this._suffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suffixInput() {
      return this._suffix
    }

    // range - computed: false, optional: true, required: false
    private _range?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined; 
    private __rangeOutput = new AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference(this as any, "range", true);
    public get range() {
      return this.__rangeOutput;
    }
    public putRange(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined) {
      this._range = value;
    }
    public resetRange() {
      this._range = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeInput() {
      return this._range
    }
  }
  export interface AppmeshRouteSpecHttp2RouteMatchHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
    */
    readonly invert?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecHttp2RouteMatchHeaderMatch;
  }

  function appmeshRouteSpecHttp2RouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      invert: cdktf.booleanToTerraform(struct!.invert),
      name: cdktf.stringToTerraform(struct!.name),
      match: appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct!.match),
    }
  }

  export interface AppmeshRouteSpecHttp2RouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method AppmeshRoute#method}
    */
    readonly method?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#scheme AppmeshRoute#scheme}
    */
    readonly scheme?: string;
    /**
    * header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#header AppmeshRoute#header}
    */
    readonly header?: AppmeshRouteSpecHttp2RouteMatchHeader[];
  }

  function appmeshRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchOutputReference | AppmeshRouteSpecHttp2RouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      method: cdktf.stringToTerraform(struct!.method),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      scheme: cdktf.stringToTerraform(struct!.scheme),
      header: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderToTerraform)(struct!.header),
    }
  }

  export class AppmeshRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // method - computed: false, optional: true, required: false
    private _method?: string | undefined; 
    public get method() {
      return this.getStringAttribute('method');
    }
    public set method(value: string | undefined) {
      this._method = value;
    }
    public resetMethod() {
      this._method = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get methodInput() {
      return this._method
    }

    // prefix - computed: false, optional: false, required: true
    private _prefix?: string; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
      this._prefix = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // scheme - computed: false, optional: true, required: false
    private _scheme?: string | undefined; 
    public get scheme() {
      return this.getStringAttribute('scheme');
    }
    public set scheme(value: string | undefined) {
      this._scheme = value;
    }
    public resetScheme() {
      this._scheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemeInput() {
      return this._scheme
    }

    // header - computed: false, optional: true, required: false
    private _header?: AppmeshRouteSpecHttp2RouteMatchHeader[] | undefined; 
    public get header() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('header') as any;
    }
    public set header(value: AppmeshRouteSpecHttp2RouteMatchHeader[] | undefined) {
      this._header = value;
    }
    public resetHeader() {
      this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
      return this._header
    }
  }
  export interface AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
  }

  function appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshRouteSpecHttp2RouteRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
    */
    readonly httpRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
    */
    readonly maxRetries: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
    */
    readonly tcpRetryEvents?: string[];
    /**
    * per_retry_timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
    */
    readonly perRetryTimeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout;
  }

  function appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
      max_retries: cdktf.numberToTerraform(struct!.maxRetries),
      tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
      per_retry_timeout: appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
    }
  }

  export class AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // http_retry_events - computed: false, optional: true, required: false
    private _httpRetryEvents?: string[] | undefined; 
    public get httpRetryEvents() {
      return this.getListAttribute('http_retry_events');
    }
    public set httpRetryEvents(value: string[] | undefined) {
      this._httpRetryEvents = value;
    }
    public resetHttpRetryEvents() {
      this._httpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpRetryEventsInput() {
      return this._httpRetryEvents
    }

    // max_retries - computed: false, optional: false, required: true
    private _maxRetries?: number; 
    public get maxRetries() {
      return this.getNumberAttribute('max_retries');
    }
    public set maxRetries(value: number) {
      this._maxRetries = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRetriesInput() {
      return this._maxRetries
    }

    // tcp_retry_events - computed: false, optional: true, required: false
    private _tcpRetryEvents?: string[] | undefined; 
    public get tcpRetryEvents() {
      return this.getListAttribute('tcp_retry_events');
    }
    public set tcpRetryEvents(value: string[] | undefined) {
      this._tcpRetryEvents = value;
    }
    public resetTcpRetryEvents() {
      this._tcpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcpRetryEventsInput() {
      return this._tcpRetryEvents
    }

    // per_retry_timeout - computed: false, optional: false, required: true
    private _perRetryTimeout?: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout; 
    private __perRetryTimeoutOutput = new AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference(this as any, "per_retry_timeout", true);
    public get perRetryTimeout() {
      return this.__perRetryTimeoutOutput;
    }
    public putPerRetryTimeout(value: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout) {
      this._perRetryTimeout = value;
    }
    // Temporarily expose input value. Use with caution.
    public get perRetryTimeoutInput() {
      return this._perRetryTimeout
    }
  }
  export interface AppmeshRouteSpecHttp2RouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
  }

  function appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference | AppmeshRouteSpecHttp2RouteTimeoutIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshRouteSpecHttp2RouteTimeoutPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
  }

  function appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttp2RouteTimeoutPerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshRouteSpecHttp2RouteTimeout {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle;
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest;
  }

  function appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutOutputReference | AppmeshRouteSpecHttp2RouteTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      idle: appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct!.idle),
      per_request: appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct!.perRequest),
    }
  }

  export class AppmeshRouteSpecHttp2RouteTimeoutOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // idle - computed: false, optional: true, required: false
    private _idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle | undefined; 
    private __idleOutput = new AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference(this as any, "idle", true);
    public get idle() {
      return this.__idleOutput;
    }
    public putIdle(value: AppmeshRouteSpecHttp2RouteTimeoutIdle | undefined) {
      this._idle = value;
    }
    public resetIdle() {
      this._idle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleInput() {
      return this._idle
    }

    // per_request - computed: false, optional: true, required: false
    private _perRequest?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined; 
    private __perRequestOutput = new AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference(this as any, "per_request", true);
    public get perRequest() {
      return this.__perRequestOutput;
    }
    public putPerRequest(value: AppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined) {
      this._perRequest = value;
    }
    public resetPerRequest() {
      this._perRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perRequestInput() {
      return this._perRequest
    }
  }
  export interface AppmeshRouteSpecHttp2Route {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecHttp2RouteAction;
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match: AppmeshRouteSpecHttp2RouteMatch;
    /**
    * retry_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecHttp2RouteRetryPolicy;
    /**
    * timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecHttp2RouteTimeout;
  }

  function appmeshRouteSpecHttp2RouteToTerraform(struct?: AppmeshRouteSpecHttp2RouteOutputReference | AppmeshRouteSpecHttp2Route): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: appmeshRouteSpecHttp2RouteActionToTerraform(struct!.action),
      match: appmeshRouteSpecHttp2RouteMatchToTerraform(struct!.match),
      retry_policy: appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct!.retryPolicy),
      timeout: appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct!.timeout),
    }
  }

  export class AppmeshRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // action - computed: false, optional: false, required: true
    private _action?: AppmeshRouteSpecHttp2RouteAction; 
    private __actionOutput = new AppmeshRouteSpecHttp2RouteActionOutputReference(this as any, "action", true);
    public get action() {
      return this.__actionOutput;
    }
    public putAction(value: AppmeshRouteSpecHttp2RouteAction) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // match - computed: false, optional: false, required: true
    private _match?: AppmeshRouteSpecHttp2RouteMatch; 
    private __matchOutput = new AppmeshRouteSpecHttp2RouteMatchOutputReference(this as any, "match", true);
    public get match() {
      return this.__matchOutput;
    }
    public putMatch(value: AppmeshRouteSpecHttp2RouteMatch) {
      this._match = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
      return this._match
    }

    // retry_policy - computed: false, optional: true, required: false
    private _retryPolicy?: AppmeshRouteSpecHttp2RouteRetryPolicy | undefined; 
    private __retryPolicyOutput = new AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference(this as any, "retry_policy", true);
    public get retryPolicy() {
      return this.__retryPolicyOutput;
    }
    public putRetryPolicy(value: AppmeshRouteSpecHttp2RouteRetryPolicy | undefined) {
      this._retryPolicy = value;
    }
    public resetRetryPolicy() {
      this._retryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryPolicyInput() {
      return this._retryPolicy
    }

    // timeout - computed: false, optional: true, required: false
    private _timeout?: AppmeshRouteSpecHttp2RouteTimeout | undefined; 
    private __timeoutOutput = new AppmeshRouteSpecHttp2RouteTimeoutOutputReference(this as any, "timeout", true);
    public get timeout() {
      return this.__timeoutOutput;
    }
    public putTimeout(value: AppmeshRouteSpecHttp2RouteTimeout | undefined) {
      this._timeout = value;
    }
    public resetTimeout() {
      this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
      return this._timeout
    }
  }
  export interface AppmeshRouteSpecHttpRouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
    */
    readonly weight: number;
  }

  function appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttpRouteActionWeightedTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }

  export interface AppmeshRouteSpecHttpRouteAction {
    /**
    * weighted_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecHttpRouteActionWeightedTarget[];
  }

  function appmeshRouteSpecHttpRouteActionToTerraform(struct?: AppmeshRouteSpecHttpRouteActionOutputReference | AppmeshRouteSpecHttpRouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      weighted_target: cdktf.listMapper(appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
    }
  }

  export class AppmeshRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // weighted_target - computed: false, optional: false, required: true
    private _weightedTarget?: AppmeshRouteSpecHttpRouteActionWeightedTarget[]; 
    public get weightedTarget() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('weighted_target') as any;
    }
    public set weightedTarget(value: AppmeshRouteSpecHttpRouteActionWeightedTarget[]) {
      this._weightedTarget = value;
    }
    // Temporarily expose input value. Use with caution.
    public get weightedTargetInput() {
      return this._weightedTarget
    }
  }
  export interface AppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
    */
    readonly end: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
    */
    readonly start: number;
  }

  function appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatchRange): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      end: cdktf.numberToTerraform(struct!.end),
      start: cdktf.numberToTerraform(struct!.start),
    }
  }

  export class AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // end - computed: false, optional: false, required: true
    private _end?: number; 
    public get end() {
      return this.getNumberAttribute('end');
    }
    public set end(value: number) {
      this._end = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endInput() {
      return this._end
    }

    // start - computed: false, optional: false, required: true
    private _start?: number; 
    public get start() {
      return this.getNumberAttribute('start');
    }
    public set start(value: number) {
      this._start = value;
    }
    // Temporarily expose input value. Use with caution.
    public get startInput() {
      return this._start
    }
  }
  export interface AppmeshRouteSpecHttpRouteMatchHeaderMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
    */
    readonly suffix?: string;
    /**
    * range block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
    */
    readonly range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange;
  }

  function appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      exact: cdktf.stringToTerraform(struct!.exact),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      regex: cdktf.stringToTerraform(struct!.regex),
      suffix: cdktf.stringToTerraform(struct!.suffix),
      range: appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct!.range),
    }
  }

  export class AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // exact - computed: false, optional: true, required: false
    private _exact?: string | undefined; 
    public get exact() {
      return this.getStringAttribute('exact');
    }
    public set exact(value: string | undefined) {
      this._exact = value;
    }
    public resetExact() {
      this._exact = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exactInput() {
      return this._exact
    }

    // prefix - computed: false, optional: true, required: false
    private _prefix?: string | undefined; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string | undefined) {
      this._prefix = value;
    }
    public resetPrefix() {
      this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // regex - computed: false, optional: true, required: false
    private _regex?: string | undefined; 
    public get regex() {
      return this.getStringAttribute('regex');
    }
    public set regex(value: string | undefined) {
      this._regex = value;
    }
    public resetRegex() {
      this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexInput() {
      return this._regex
    }

    // suffix - computed: false, optional: true, required: false
    private _suffix?: string | undefined; 
    public get suffix() {
      return this.getStringAttribute('suffix');
    }
    public set suffix(value: string | undefined) {
      this._suffix = value;
    }
    public resetSuffix() {
      this._suffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suffixInput() {
      return this._suffix
    }

    // range - computed: false, optional: true, required: false
    private _range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined; 
    private __rangeOutput = new AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference(this as any, "range", true);
    public get range() {
      return this.__rangeOutput;
    }
    public putRange(value: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined) {
      this._range = value;
    }
    public resetRange() {
      this._range = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeInput() {
      return this._range
    }
  }
  export interface AppmeshRouteSpecHttpRouteMatchHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
    */
    readonly invert?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecHttpRouteMatchHeaderMatch;
  }

  function appmeshRouteSpecHttpRouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      invert: cdktf.booleanToTerraform(struct!.invert),
      name: cdktf.stringToTerraform(struct!.name),
      match: appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct!.match),
    }
  }

  export interface AppmeshRouteSpecHttpRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method AppmeshRoute#method}
    */
    readonly method?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
    */
    readonly prefix: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#scheme AppmeshRoute#scheme}
    */
    readonly scheme?: string;
    /**
    * header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#header AppmeshRoute#header}
    */
    readonly header?: AppmeshRouteSpecHttpRouteMatchHeader[];
  }

  function appmeshRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchOutputReference | AppmeshRouteSpecHttpRouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      method: cdktf.stringToTerraform(struct!.method),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      scheme: cdktf.stringToTerraform(struct!.scheme),
      header: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderToTerraform)(struct!.header),
    }
  }

  export class AppmeshRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // method - computed: false, optional: true, required: false
    private _method?: string | undefined; 
    public get method() {
      return this.getStringAttribute('method');
    }
    public set method(value: string | undefined) {
      this._method = value;
    }
    public resetMethod() {
      this._method = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get methodInput() {
      return this._method
    }

    // prefix - computed: false, optional: false, required: true
    private _prefix?: string; 
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
      this._prefix = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
      return this._prefix
    }

    // scheme - computed: false, optional: true, required: false
    private _scheme?: string | undefined; 
    public get scheme() {
      return this.getStringAttribute('scheme');
    }
    public set scheme(value: string | undefined) {
      this._scheme = value;
    }
    public resetScheme() {
      this._scheme = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemeInput() {
      return this._scheme
    }

    // header - computed: false, optional: true, required: false
    private _header?: AppmeshRouteSpecHttpRouteMatchHeader[] | undefined; 
    public get header() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('header') as any;
    }
    public set header(value: AppmeshRouteSpecHttpRouteMatchHeader[] | undefined) {
      this._header = value;
    }
    public resetHeader() {
      this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
      return this._header
    }
  }
  export interface AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
  }

  function appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshRouteSpecHttpRouteRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
    */
    readonly httpRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
    */
    readonly maxRetries: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
    */
    readonly tcpRetryEvents?: string[];
    /**
    * per_retry_timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
    */
    readonly perRetryTimeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout;
  }

  function appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyOutputReference | AppmeshRouteSpecHttpRouteRetryPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
      max_retries: cdktf.numberToTerraform(struct!.maxRetries),
      tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
      per_retry_timeout: appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
    }
  }

  export class AppmeshRouteSpecHttpRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // http_retry_events - computed: false, optional: true, required: false
    private _httpRetryEvents?: string[] | undefined; 
    public get httpRetryEvents() {
      return this.getListAttribute('http_retry_events');
    }
    public set httpRetryEvents(value: string[] | undefined) {
      this._httpRetryEvents = value;
    }
    public resetHttpRetryEvents() {
      this._httpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpRetryEventsInput() {
      return this._httpRetryEvents
    }

    // max_retries - computed: false, optional: false, required: true
    private _maxRetries?: number; 
    public get maxRetries() {
      return this.getNumberAttribute('max_retries');
    }
    public set maxRetries(value: number) {
      this._maxRetries = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRetriesInput() {
      return this._maxRetries
    }

    // tcp_retry_events - computed: false, optional: true, required: false
    private _tcpRetryEvents?: string[] | undefined; 
    public get tcpRetryEvents() {
      return this.getListAttribute('tcp_retry_events');
    }
    public set tcpRetryEvents(value: string[] | undefined) {
      this._tcpRetryEvents = value;
    }
    public resetTcpRetryEvents() {
      this._tcpRetryEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcpRetryEventsInput() {
      return this._tcpRetryEvents
    }

    // per_retry_timeout - computed: false, optional: false, required: true
    private _perRetryTimeout?: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout; 
    private __perRetryTimeoutOutput = new AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference(this as any, "per_retry_timeout", true);
    public get perRetryTimeout() {
      return this.__perRetryTimeoutOutput;
    }
    public putPerRetryTimeout(value: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout) {
      this._perRetryTimeout = value;
    }
    // Temporarily expose input value. Use with caution.
    public get perRetryTimeoutInput() {
      return this._perRetryTimeout
    }
  }
  export interface AppmeshRouteSpecHttpRouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
  }

  function appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference | AppmeshRouteSpecHttpRouteTimeoutIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshRouteSpecHttpRouteTimeoutPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
  }

  function appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttpRouteTimeoutPerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshRouteSpecHttpRouteTimeout {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecHttpRouteTimeoutIdle;
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecHttpRouteTimeoutPerRequest;
  }

  function appmeshRouteSpecHttpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutOutputReference | AppmeshRouteSpecHttpRouteTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      idle: appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct!.idle),
      per_request: appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct!.perRequest),
    }
  }

  export class AppmeshRouteSpecHttpRouteTimeoutOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // idle - computed: false, optional: true, required: false
    private _idle?: AppmeshRouteSpecHttpRouteTimeoutIdle | undefined; 
    private __idleOutput = new AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference(this as any, "idle", true);
    public get idle() {
      return this.__idleOutput;
    }
    public putIdle(value: AppmeshRouteSpecHttpRouteTimeoutIdle | undefined) {
      this._idle = value;
    }
    public resetIdle() {
      this._idle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleInput() {
      return this._idle
    }

    // per_request - computed: false, optional: true, required: false
    private _perRequest?: AppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined; 
    private __perRequestOutput = new AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference(this as any, "per_request", true);
    public get perRequest() {
      return this.__perRequestOutput;
    }
    public putPerRequest(value: AppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined) {
      this._perRequest = value;
    }
    public resetPerRequest() {
      this._perRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perRequestInput() {
      return this._perRequest
    }
  }
  export interface AppmeshRouteSpecHttpRoute {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecHttpRouteAction;
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match: AppmeshRouteSpecHttpRouteMatch;
    /**
    * retry_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecHttpRouteRetryPolicy;
    /**
    * timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecHttpRouteTimeout;
  }

  function appmeshRouteSpecHttpRouteToTerraform(struct?: AppmeshRouteSpecHttpRouteOutputReference | AppmeshRouteSpecHttpRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: appmeshRouteSpecHttpRouteActionToTerraform(struct!.action),
      match: appmeshRouteSpecHttpRouteMatchToTerraform(struct!.match),
      retry_policy: appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct!.retryPolicy),
      timeout: appmeshRouteSpecHttpRouteTimeoutToTerraform(struct!.timeout),
    }
  }

  export class AppmeshRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // action - computed: false, optional: false, required: true
    private _action?: AppmeshRouteSpecHttpRouteAction; 
    private __actionOutput = new AppmeshRouteSpecHttpRouteActionOutputReference(this as any, "action", true);
    public get action() {
      return this.__actionOutput;
    }
    public putAction(value: AppmeshRouteSpecHttpRouteAction) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // match - computed: false, optional: false, required: true
    private _match?: AppmeshRouteSpecHttpRouteMatch; 
    private __matchOutput = new AppmeshRouteSpecHttpRouteMatchOutputReference(this as any, "match", true);
    public get match() {
      return this.__matchOutput;
    }
    public putMatch(value: AppmeshRouteSpecHttpRouteMatch) {
      this._match = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
      return this._match
    }

    // retry_policy - computed: false, optional: true, required: false
    private _retryPolicy?: AppmeshRouteSpecHttpRouteRetryPolicy | undefined; 
    private __retryPolicyOutput = new AppmeshRouteSpecHttpRouteRetryPolicyOutputReference(this as any, "retry_policy", true);
    public get retryPolicy() {
      return this.__retryPolicyOutput;
    }
    public putRetryPolicy(value: AppmeshRouteSpecHttpRouteRetryPolicy | undefined) {
      this._retryPolicy = value;
    }
    public resetRetryPolicy() {
      this._retryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryPolicyInput() {
      return this._retryPolicy
    }

    // timeout - computed: false, optional: true, required: false
    private _timeout?: AppmeshRouteSpecHttpRouteTimeout | undefined; 
    private __timeoutOutput = new AppmeshRouteSpecHttpRouteTimeoutOutputReference(this as any, "timeout", true);
    public get timeout() {
      return this.__timeoutOutput;
    }
    public putTimeout(value: AppmeshRouteSpecHttpRouteTimeout | undefined) {
      this._timeout = value;
    }
    public resetTimeout() {
      this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
      return this._timeout
    }
  }
  export interface AppmeshRouteSpecTcpRouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
    */
    readonly weight: number;
  }

  function appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecTcpRouteActionWeightedTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }

  export interface AppmeshRouteSpecTcpRouteAction {
    /**
    * weighted_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecTcpRouteActionWeightedTarget[];
  }

  function appmeshRouteSpecTcpRouteActionToTerraform(struct?: AppmeshRouteSpecTcpRouteActionOutputReference | AppmeshRouteSpecTcpRouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      weighted_target: cdktf.listMapper(appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
    }
  }

  export class AppmeshRouteSpecTcpRouteActionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // weighted_target - computed: false, optional: false, required: true
    private _weightedTarget?: AppmeshRouteSpecTcpRouteActionWeightedTarget[]; 
    public get weightedTarget() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('weighted_target') as any;
    }
    public set weightedTarget(value: AppmeshRouteSpecTcpRouteActionWeightedTarget[]) {
      this._weightedTarget = value;
    }
    // Temporarily expose input value. Use with caution.
    public get weightedTargetInput() {
      return this._weightedTarget
    }
  }
  export interface AppmeshRouteSpecTcpRouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
    */
    readonly value: number;
  }

  function appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference | AppmeshRouteSpecTcpRouteTimeoutIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshRouteSpecTcpRouteTimeout {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecTcpRouteTimeoutIdle;
  }

  function appmeshRouteSpecTcpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutOutputReference | AppmeshRouteSpecTcpRouteTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      idle: appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct!.idle),
    }
  }

  export class AppmeshRouteSpecTcpRouteTimeoutOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // idle - computed: false, optional: true, required: false
    private _idle?: AppmeshRouteSpecTcpRouteTimeoutIdle | undefined; 
    private __idleOutput = new AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference(this as any, "idle", true);
    public get idle() {
      return this.__idleOutput;
    }
    public putIdle(value: AppmeshRouteSpecTcpRouteTimeoutIdle | undefined) {
      this._idle = value;
    }
    public resetIdle() {
      this._idle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleInput() {
      return this._idle
    }
  }
  export interface AppmeshRouteSpecTcpRoute {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecTcpRouteAction;
    /**
    * timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecTcpRouteTimeout;
  }

  function appmeshRouteSpecTcpRouteToTerraform(struct?: AppmeshRouteSpecTcpRouteOutputReference | AppmeshRouteSpecTcpRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      action: appmeshRouteSpecTcpRouteActionToTerraform(struct!.action),
      timeout: appmeshRouteSpecTcpRouteTimeoutToTerraform(struct!.timeout),
    }
  }

  export class AppmeshRouteSpecTcpRouteOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // action - computed: false, optional: false, required: true
    private _action?: AppmeshRouteSpecTcpRouteAction; 
    private __actionOutput = new AppmeshRouteSpecTcpRouteActionOutputReference(this as any, "action", true);
    public get action() {
      return this.__actionOutput;
    }
    public putAction(value: AppmeshRouteSpecTcpRouteAction) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // timeout - computed: false, optional: true, required: false
    private _timeout?: AppmeshRouteSpecTcpRouteTimeout | undefined; 
    private __timeoutOutput = new AppmeshRouteSpecTcpRouteTimeoutOutputReference(this as any, "timeout", true);
    public get timeout() {
      return this.__timeoutOutput;
    }
    public putTimeout(value: AppmeshRouteSpecTcpRouteTimeout | undefined) {
      this._timeout = value;
    }
    public resetTimeout() {
      this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
      return this._timeout
    }
  }
  export interface AppmeshRouteSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#priority AppmeshRoute#priority}
    */
    readonly priority?: number;
    /**
    * grpc_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#grpc_route AppmeshRoute#grpc_route}
    */
    readonly grpcRoute?: AppmeshRouteSpecGrpcRoute;
    /**
    * http2_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http2_route AppmeshRoute#http2_route}
    */
    readonly http2Route?: AppmeshRouteSpecHttp2Route;
    /**
    * http_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_route AppmeshRoute#http_route}
    */
    readonly httpRoute?: AppmeshRouteSpecHttpRoute;
    /**
    * tcp_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_route AppmeshRoute#tcp_route}
    */
    readonly tcpRoute?: AppmeshRouteSpecTcpRoute;
  }

  function appmeshRouteSpecToTerraform(struct?: AppmeshRouteSpecOutputReference | AppmeshRouteSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      priority: cdktf.numberToTerraform(struct!.priority),
      grpc_route: appmeshRouteSpecGrpcRouteToTerraform(struct!.grpcRoute),
      http2_route: appmeshRouteSpecHttp2RouteToTerraform(struct!.http2Route),
      http_route: appmeshRouteSpecHttpRouteToTerraform(struct!.httpRoute),
      tcp_route: appmeshRouteSpecTcpRouteToTerraform(struct!.tcpRoute),
    }
  }

  export class AppmeshRouteSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // priority - computed: false, optional: true, required: false
    private _priority?: number | undefined; 
    public get priority() {
      return this.getNumberAttribute('priority');
    }
    public set priority(value: number | undefined) {
      this._priority = value;
    }
    public resetPriority() {
      this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
      return this._priority
    }

    // grpc_route - computed: false, optional: true, required: false
    private _grpcRoute?: AppmeshRouteSpecGrpcRoute | undefined; 
    private __grpcRouteOutput = new AppmeshRouteSpecGrpcRouteOutputReference(this as any, "grpc_route", true);
    public get grpcRoute() {
      return this.__grpcRouteOutput;
    }
    public putGrpcRoute(value: AppmeshRouteSpecGrpcRoute | undefined) {
      this._grpcRoute = value;
    }
    public resetGrpcRoute() {
      this._grpcRoute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grpcRouteInput() {
      return this._grpcRoute
    }

    // http2_route - computed: false, optional: true, required: false
    private _http2Route?: AppmeshRouteSpecHttp2Route | undefined; 
    private __http2RouteOutput = new AppmeshRouteSpecHttp2RouteOutputReference(this as any, "http2_route", true);
    public get http2Route() {
      return this.__http2RouteOutput;
    }
    public putHttp2Route(value: AppmeshRouteSpecHttp2Route | undefined) {
      this._http2Route = value;
    }
    public resetHttp2Route() {
      this._http2Route = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get http2RouteInput() {
      return this._http2Route
    }

    // http_route - computed: false, optional: true, required: false
    private _httpRoute?: AppmeshRouteSpecHttpRoute | undefined; 
    private __httpRouteOutput = new AppmeshRouteSpecHttpRouteOutputReference(this as any, "http_route", true);
    public get httpRoute() {
      return this.__httpRouteOutput;
    }
    public putHttpRoute(value: AppmeshRouteSpecHttpRoute | undefined) {
      this._httpRoute = value;
    }
    public resetHttpRoute() {
      this._httpRoute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpRouteInput() {
      return this._httpRoute
    }

    // tcp_route - computed: false, optional: true, required: false
    private _tcpRoute?: AppmeshRouteSpecTcpRoute | undefined; 
    private __tcpRouteOutput = new AppmeshRouteSpecTcpRouteOutputReference(this as any, "tcp_route", true);
    public get tcpRoute() {
      return this.__tcpRouteOutput;
    }
    public putTcpRoute(value: AppmeshRouteSpecTcpRoute | undefined) {
      this._tcpRoute = value;
    }
    public resetTcpRoute() {
      this._tcpRoute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcpRouteInput() {
      return this._tcpRoute
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route}
  */
  export class AppmeshRoute extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_route";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshRouteConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshRouteConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_route',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._meshName = config.meshName;
      this._meshOwner = config.meshOwner;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._virtualRouterName = config.virtualRouterName;
      this._spec = config.spec;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
    }

    // mesh_name - computed: false, optional: false, required: true
    private _meshName?: string; 
    public get meshName() {
      return this.getStringAttribute('mesh_name');
    }
    public set meshName(value: string) {
      this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get meshNameInput() {
      return this._meshName
    }

    // mesh_owner - computed: true, optional: true, required: false
    private _meshOwner?: string | undefined; 
    public get meshOwner() {
      return this.getStringAttribute('mesh_owner');
    }
    public set meshOwner(value: string | undefined) {
      this._meshOwner = value;
    }
    public resetMeshOwner() {
      this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get meshOwnerInput() {
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // resource_owner - computed: true, optional: false, required: false
    public get resourceOwner() {
      return this.getStringAttribute('resource_owner');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // virtual_router_name - computed: false, optional: false, required: true
    private _virtualRouterName?: string; 
    public get virtualRouterName() {
      return this.getStringAttribute('virtual_router_name');
    }
    public set virtualRouterName(value: string) {
      this._virtualRouterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualRouterNameInput() {
      return this._virtualRouterName
    }

    // spec - computed: false, optional: false, required: true
    private _spec?: AppmeshRouteSpec; 
    private __specOutput = new AppmeshRouteSpecOutputReference(this as any, "spec", true);
    public get spec() {
      return this.__specOutput;
    }
    public putSpec(value: AppmeshRouteSpec) {
      this._spec = value;
    }
    // Temporarily expose input value. Use with caution.
    public get specInput() {
      return this._spec
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        mesh_name: cdktf.stringToTerraform(this._meshName),
        mesh_owner: cdktf.stringToTerraform(this._meshOwner),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        virtual_router_name: cdktf.stringToTerraform(this._virtualRouterName),
        spec: appmeshRouteSpecToTerraform(this._spec),
      };
    }
  }
  export interface AppmeshVirtualGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_name AppmeshVirtualGateway#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_owner AppmeshVirtualGateway#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#name AppmeshVirtualGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags AppmeshVirtualGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags_all AppmeshVirtualGateway#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#spec AppmeshVirtualGateway#spec}
    */
    readonly spec: AppmeshVirtualGatewaySpec;
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}
    */
    readonly privateKey: string;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
      private_key: cdktf.stringToTerraform(struct!.privateKey),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_chain - computed: false, optional: false, required: true
    private _certificateChain?: string; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
      this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }

    // private_key - computed: false, optional: false, required: true
    private _privateKey?: string; 
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string) {
      this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyInput() {
      return this._privateKey
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // secret_name - computed: false, optional: false, required: true
    private _secretName?: string; 
    public get secretName() {
      return this.getStringAttribute('secret_name');
    }
    public set secretName(value: string) {
      this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretNameInput() {
      return this._secretName
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile;
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      file: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct!.file),
      sds: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct!.sds),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile | undefined; 
    private __fileOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }

    // sds - computed: false, optional: true, required: false
    private _sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds | undefined; 
    private __sdsOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(this as any, "sds", true);
    public get sds() {
      return this.__sdsOutput;
    }
    public putSds(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds | undefined) {
      this._sds = value;
    }
    public resetSds() {
      this._sds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdsInput() {
      return this._sds
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}
    */
    readonly exact: string[];
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // exact - computed: false, optional: false, required: true
    private _exact?: string[]; 
    public get exact() {
      return this.getListAttribute('exact');
    }
    public set exact(value: string[]) {
      this._exact = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exactInput() {
      return this._exact
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
    */
    readonly match: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      match: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // match - computed: false, optional: false, required: true
    private _match?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch; 
    private __matchOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this as any, "match", true);
    public get match() {
      return this.__matchOutput;
    }
    public putMatch(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch) {
      this._match = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
      return this._match
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_authority_arns - computed: false, optional: false, required: true
    private _certificateAuthorityArns?: string[]; 
    public get certificateAuthorityArns() {
      return this.getListAttribute('certificate_authority_arns');
    }
    public set certificateAuthorityArns(value: string[]) {
      this._certificateAuthorityArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnsInput() {
      return this._certificateAuthorityArns
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_chain - computed: false, optional: false, required: true
    private _certificateChain?: string; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
      this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // secret_name - computed: false, optional: false, required: true
    private _secretName?: string; 
    public get secretName() {
      return this.getStringAttribute('secret_name');
    }
    public set secretName(value: string) {
      this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretNameInput() {
      return this._secretName
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
    /**
    * acm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
    */
    readonly acm?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile;
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      acm: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct!.acm),
      file: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct!.file),
      sds: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct!.sds),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // acm - computed: false, optional: true, required: false
    private _acm?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined; 
    private __acmOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(this as any, "acm", true);
    public get acm() {
      return this.__acmOutput;
    }
    public putAcm(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined) {
      this._acm = value;
    }
    public resetAcm() {
      this._acm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acmInput() {
      return this._acm
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined; 
    private __fileOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }

    // sds - computed: false, optional: true, required: false
    private _sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined; 
    private __sdsOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(this as any, "sds", true);
    public get sds() {
      return this.__sdsOutput;
    }
    public putSds(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined) {
      this._sds = value;
    }
    public resetSds() {
      this._sds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdsInput() {
      return this._sds
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
    */
    readonly trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      subject_alternative_names: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
      trust: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct!.trust),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // subject_alternative_names - computed: false, optional: true, required: false
    private _subjectAlternativeNames?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined; 
    private __subjectAlternativeNamesOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
    public get subjectAlternativeNames() {
      return this.__subjectAlternativeNamesOutput;
    }
    public putSubjectAlternativeNames(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined) {
      this._subjectAlternativeNames = value;
    }
    public resetSubjectAlternativeNames() {
      this._subjectAlternativeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectAlternativeNamesInput() {
      return this._subjectAlternativeNames
    }

    // trust - computed: false, optional: false, required: true
    private _trust?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust; 
    private __trustOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(this as any, "trust", true);
    public get trust() {
      return this.__trustOutput;
    }
    public putTrust(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust) {
      this._trust = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trustInput() {
      return this._trust
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#enforce AppmeshVirtualGateway#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#ports AppmeshVirtualGateway#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
    */
    readonly certificate?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate;
    /**
    * validation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
    */
    readonly validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enforce: cdktf.booleanToTerraform(struct!.enforce),
      ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
      certificate: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct!.certificate),
      validation: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct!.validation),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enforce - computed: false, optional: true, required: false
    private _enforce?: boolean | cdktf.IResolvable | undefined; 
    public get enforce() {
      return this.getBooleanAttribute('enforce') as any;
    }
    public set enforce(value: boolean | cdktf.IResolvable | undefined) {
      this._enforce = value;
    }
    public resetEnforce() {
      this._enforce = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceInput() {
      return this._enforce
    }

    // ports - computed: false, optional: true, required: false
    private _ports?: number[] | undefined; 
    public get ports() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ports') as any;
    }
    public set ports(value: number[] | undefined) {
      this._ports = value;
    }
    public resetPorts() {
      this._ports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portsInput() {
      return this._ports
    }

    // certificate - computed: false, optional: true, required: false
    private _certificate?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate | undefined; 
    private __certificateOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference(this as any, "certificate", true);
    public get certificate() {
      return this.__certificateOutput;
    }
    public putCertificate(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate | undefined) {
      this._certificate = value;
    }
    public resetCertificate() {
      this._certificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
      return this._certificate
    }

    // validation - computed: false, optional: false, required: true
    private _validation?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation; 
    private __validationOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference(this as any, "validation", true);
    public get validation() {
      return this.__validationOutput;
    }
    public putValidation(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation) {
      this._validation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
      return this._validation
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
    */
    readonly tls?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      tls: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct!.tls),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // tls - computed: false, optional: true, required: false
    private _tls?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls | undefined; 
    private __tlsOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference(this as any, "tls", true);
    public get tls() {
      return this.__tlsOutput;
    }
    public putTls(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls | undefined) {
      this._tls = value;
    }
    public resetTls() {
      this._tls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInput() {
      return this._tls
    }
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaults {
    /**
    * client_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#client_policy AppmeshVirtualGateway#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsOutputReference | AppmeshVirtualGatewaySpecBackendDefaults): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      client_policy: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct!.clientPolicy),
    }
  }

  export class AppmeshVirtualGatewaySpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // client_policy - computed: false, optional: true, required: false
    private _clientPolicy?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy | undefined; 
    private __clientPolicyOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference(this as any, "client_policy", true);
    public get clientPolicy() {
      return this.__clientPolicyOutput;
    }
    public putClientPolicy(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy | undefined) {
      this._clientPolicy = value;
    }
    public resetClientPolicy() {
      this._clientPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientPolicyInput() {
      return this._clientPolicy
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}
    */
    readonly maxRequests: number;
  }

  function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_requests - computed: false, optional: false, required: true
    private _maxRequests?: number; 
    public get maxRequests() {
      return this.getNumberAttribute('max_requests');
    }
    public set maxRequests(value: number) {
      this._maxRequests = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRequestsInput() {
      return this._maxRequests
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_connections AppmeshVirtualGateway#max_connections}
    */
    readonly maxConnections: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_pending_requests AppmeshVirtualGateway#max_pending_requests}
    */
    readonly maxPendingRequests?: number;
  }

  function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolHttp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_connections: cdktf.numberToTerraform(struct!.maxConnections),
      max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_connections - computed: false, optional: false, required: true
    private _maxConnections?: number; 
    public get maxConnections() {
      return this.getNumberAttribute('max_connections');
    }
    public set maxConnections(value: number) {
      this._maxConnections = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConnectionsInput() {
      return this._maxConnections
    }

    // max_pending_requests - computed: false, optional: true, required: false
    private _maxPendingRequests?: number | undefined; 
    public get maxPendingRequests() {
      return this.getNumberAttribute('max_pending_requests');
    }
    public set maxPendingRequests(value: number | undefined) {
      this._maxPendingRequests = value;
    }
    public resetMaxPendingRequests() {
      this._maxPendingRequests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPendingRequestsInput() {
      return this._maxPendingRequests
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}
    */
    readonly maxRequests: number;
  }

  function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_requests - computed: false, optional: false, required: true
    private _maxRequests?: number; 
    public get maxRequests() {
      return this.getNumberAttribute('max_requests');
    }
    public set maxRequests(value: number) {
      this._maxRequests = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRequestsInput() {
      return this._maxRequests
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerConnectionPool {
    /**
    * grpc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#grpc AppmeshVirtualGateway#grpc}
    */
    readonly grpc?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc;
    /**
    * http block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http AppmeshVirtualGateway#http}
    */
    readonly http?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp;
    /**
    * http2 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http2 AppmeshVirtualGateway#http2}
    */
    readonly http2?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2;
  }

  function appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPool): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      grpc: appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct!.grpc),
      http: appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct!.http),
      http2: appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct!.http2),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // grpc - computed: false, optional: true, required: false
    private _grpc?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc | undefined; 
    private __grpcOutput = new AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference(this as any, "grpc", true);
    public get grpc() {
      return this.__grpcOutput;
    }
    public putGrpc(value: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc | undefined) {
      this._grpc = value;
    }
    public resetGrpc() {
      this._grpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grpcInput() {
      return this._grpc
    }

    // http - computed: false, optional: true, required: false
    private _http?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp | undefined; 
    private __httpOutput = new AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference(this as any, "http", true);
    public get http() {
      return this.__httpOutput;
    }
    public putHttp(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp | undefined) {
      this._http = value;
    }
    public resetHttp() {
      this._http = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpInput() {
      return this._http
    }

    // http2 - computed: false, optional: true, required: false
    private _http2?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 | undefined; 
    private __http2Output = new AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference(this as any, "http2", true);
    public get http2() {
      return this.__http2Output;
    }
    public putHttp2(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 | undefined) {
      this._http2 = value;
    }
    public resetHttp2() {
      this._http2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get http2Input() {
      return this._http2
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#healthy_threshold AppmeshVirtualGateway#healthy_threshold}
    */
    readonly healthyThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#interval_millis AppmeshVirtualGateway#interval_millis}
    */
    readonly intervalMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#timeout_millis AppmeshVirtualGateway#timeout_millis}
    */
    readonly timeoutMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}
    */
    readonly unhealthyThreshold: number;
  }

  function appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference | AppmeshVirtualGatewaySpecListenerHealthCheck): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
      interval_millis: cdktf.numberToTerraform(struct!.intervalMillis),
      path: cdktf.stringToTerraform(struct!.path),
      port: cdktf.numberToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      timeout_millis: cdktf.numberToTerraform(struct!.timeoutMillis),
      unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // healthy_threshold - computed: false, optional: false, required: true
    private _healthyThreshold?: number; 
    public get healthyThreshold() {
      return this.getNumberAttribute('healthy_threshold');
    }
    public set healthyThreshold(value: number) {
      this._healthyThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    public get healthyThresholdInput() {
      return this._healthyThreshold
    }

    // interval_millis - computed: false, optional: false, required: true
    private _intervalMillis?: number; 
    public get intervalMillis() {
      return this.getNumberAttribute('interval_millis');
    }
    public set intervalMillis(value: number) {
      this._intervalMillis = value;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalMillisInput() {
      return this._intervalMillis
    }

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // port - computed: true, optional: true, required: false
    private _port?: number | undefined; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number | undefined) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // timeout_millis - computed: false, optional: false, required: true
    private _timeoutMillis?: number; 
    public get timeoutMillis() {
      return this.getNumberAttribute('timeout_millis');
    }
    public set timeoutMillis(value: number) {
      this._timeoutMillis = value;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutMillisInput() {
      return this._timeoutMillis
    }

    // unhealthy_threshold - computed: false, optional: false, required: true
    private _unhealthyThreshold?: number; 
    public get unhealthyThreshold() {
      return this.getNumberAttribute('unhealthy_threshold');
    }
    public set unhealthyThreshold(value: number) {
      this._unhealthyThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unhealthyThresholdInput() {
      return this._unhealthyThreshold
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}
    */
    readonly protocol: string;
  }

  function appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct?: AppmeshVirtualGatewaySpecListenerPortMappingOutputReference | AppmeshVirtualGatewaySpecListenerPortMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      port: cdktf.numberToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // port - computed: false, optional: false, required: true
    private _port?: number; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number) {
      this._port = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerTlsCertificateAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_arn AppmeshVirtualGateway#certificate_arn}
    */
    readonly certificateArn: string;
  }

  function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateAcm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_arn - computed: false, optional: false, required: true
    private _certificateArn?: string; 
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
      this._certificateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
      return this._certificateArn
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}
    */
    readonly privateKey: string;
  }

  function appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
      private_key: cdktf.stringToTerraform(struct!.privateKey),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_chain - computed: false, optional: false, required: true
    private _certificateChain?: string; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
      this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }

    // private_key - computed: false, optional: false, required: true
    private _privateKey?: string; 
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string) {
      this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyInput() {
      return this._privateKey
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // secret_name - computed: false, optional: false, required: true
    private _secretName?: string; 
    public get secretName() {
      return this.getStringAttribute('secret_name');
    }
    public set secretName(value: string) {
      this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretNameInput() {
      return this._secretName
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerTlsCertificate {
    /**
    * acm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
    */
    readonly acm?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm;
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile;
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecListenerTlsCertificateSds;
  }

  function appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      acm: appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct!.acm),
      file: appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct!.file),
      sds: appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct!.sds),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // acm - computed: false, optional: true, required: false
    private _acm?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm | undefined; 
    private __acmOutput = new AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference(this as any, "acm", true);
    public get acm() {
      return this.__acmOutput;
    }
    public putAcm(value: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm | undefined) {
      this._acm = value;
    }
    public resetAcm() {
      this._acm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acmInput() {
      return this._acm
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile | undefined; 
    private __fileOutput = new AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualGatewaySpecListenerTlsCertificateFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }

    // sds - computed: false, optional: true, required: false
    private _sds?: AppmeshVirtualGatewaySpecListenerTlsCertificateSds | undefined; 
    private __sdsOutput = new AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference(this as any, "sds", true);
    public get sds() {
      return this.__sdsOutput;
    }
    public putSds(value: AppmeshVirtualGatewaySpecListenerTlsCertificateSds | undefined) {
      this._sds = value;
    }
    public resetSds() {
      this._sds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdsInput() {
      return this._sds
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}
    */
    readonly exact: string[];
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // exact - computed: false, optional: false, required: true
    private _exact?: string[]; 
    public get exact() {
      return this.getListAttribute('exact');
    }
    public set exact(value: string[]) {
      this._exact = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exactInput() {
      return this._exact
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames {
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
    */
    readonly match: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch;
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      match: appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // match - computed: false, optional: false, required: true
    private _match?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch; 
    private __matchOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(this as any, "match", true);
    public get match() {
      return this.__matchOutput;
    }
    public putMatch(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch) {
      this._match = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
      return this._match
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_chain - computed: false, optional: false, required: true
    private _certificateChain?: string; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
      this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // secret_name - computed: false, optional: false, required: true
    private _secretName?: string; 
    public get secretName() {
      return this.getStringAttribute('secret_name');
    }
    public set secretName(value: string) {
      this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretNameInput() {
      return this._secretName
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrust {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile;
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds;
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrust): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      file: appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct!.file),
      sds: appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct!.sds),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile | undefined; 
    private __fileOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }

    // sds - computed: false, optional: true, required: false
    private _sds?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds | undefined; 
    private __sdsOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference(this as any, "sds", true);
    public get sds() {
      return this.__sdsOutput;
    }
    public putSds(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds | undefined) {
      this._sds = value;
    }
    public resetSds() {
      this._sds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdsInput() {
      return this._sds
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerTlsValidation {
    /**
    * subject_alternative_names block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
    */
    readonly trust: AppmeshVirtualGatewaySpecListenerTlsValidationTrust;
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      subject_alternative_names: appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
      trust: appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct!.trust),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // subject_alternative_names - computed: false, optional: true, required: false
    private _subjectAlternativeNames?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames | undefined; 
    private __subjectAlternativeNamesOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
    public get subjectAlternativeNames() {
      return this.__subjectAlternativeNamesOutput;
    }
    public putSubjectAlternativeNames(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames | undefined) {
      this._subjectAlternativeNames = value;
    }
    public resetSubjectAlternativeNames() {
      this._subjectAlternativeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectAlternativeNamesInput() {
      return this._subjectAlternativeNames
    }

    // trust - computed: false, optional: false, required: true
    private _trust?: AppmeshVirtualGatewaySpecListenerTlsValidationTrust; 
    private __trustOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference(this as any, "trust", true);
    public get trust() {
      return this.__trustOutput;
    }
    public putTrust(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrust) {
      this._trust = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trustInput() {
      return this._trust
    }
  }
  export interface AppmeshVirtualGatewaySpecListenerTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mode AppmeshVirtualGateway#mode}
    */
    readonly mode: string;
    /**
    * certificate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
    */
    readonly certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate;
    /**
    * validation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
    */
    readonly validation?: AppmeshVirtualGatewaySpecListenerTlsValidation;
  }

  function appmeshVirtualGatewaySpecListenerTlsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsOutputReference | AppmeshVirtualGatewaySpecListenerTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      mode: cdktf.stringToTerraform(struct!.mode),
      certificate: appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct!.certificate),
      validation: appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct!.validation),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerTlsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // mode - computed: false, optional: false, required: true
    private _mode?: string; 
    public get mode() {
      return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
      this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
      return this._mode
    }

    // certificate - computed: false, optional: false, required: true
    private _certificate?: AppmeshVirtualGatewaySpecListenerTlsCertificate; 
    private __certificateOutput = new AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference(this as any, "certificate", true);
    public get certificate() {
      return this.__certificateOutput;
    }
    public putCertificate(value: AppmeshVirtualGatewaySpecListenerTlsCertificate) {
      this._certificate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
      return this._certificate
    }

    // validation - computed: false, optional: true, required: false
    private _validation?: AppmeshVirtualGatewaySpecListenerTlsValidation | undefined; 
    private __validationOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference(this as any, "validation", true);
    public get validation() {
      return this.__validationOutput;
    }
    public putValidation(value: AppmeshVirtualGatewaySpecListenerTlsValidation | undefined) {
      this._validation = value;
    }
    public resetValidation() {
      this._validation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
      return this._validation
    }
  }
  export interface AppmeshVirtualGatewaySpecListener {
    /**
    * connection_pool block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#connection_pool AppmeshVirtualGateway#connection_pool}
    */
    readonly connectionPool?: AppmeshVirtualGatewaySpecListenerConnectionPool;
    /**
    * health_check block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#health_check AppmeshVirtualGateway#health_check}
    */
    readonly healthCheck?: AppmeshVirtualGatewaySpecListenerHealthCheck;
    /**
    * port_mapping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port_mapping AppmeshVirtualGateway#port_mapping}
    */
    readonly portMapping: AppmeshVirtualGatewaySpecListenerPortMapping;
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
    */
    readonly tls?: AppmeshVirtualGatewaySpecListenerTls;
  }

  function appmeshVirtualGatewaySpecListenerToTerraform(struct?: AppmeshVirtualGatewaySpecListenerOutputReference | AppmeshVirtualGatewaySpecListener): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      connection_pool: appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct!.connectionPool),
      health_check: appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct!.healthCheck),
      port_mapping: appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct!.portMapping),
      tls: appmeshVirtualGatewaySpecListenerTlsToTerraform(struct!.tls),
    }
  }

  export class AppmeshVirtualGatewaySpecListenerOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // connection_pool - computed: false, optional: true, required: false
    private _connectionPool?: AppmeshVirtualGatewaySpecListenerConnectionPool | undefined; 
    private __connectionPoolOutput = new AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference(this as any, "connection_pool", true);
    public get connectionPool() {
      return this.__connectionPoolOutput;
    }
    public putConnectionPool(value: AppmeshVirtualGatewaySpecListenerConnectionPool | undefined) {
      this._connectionPool = value;
    }
    public resetConnectionPool() {
      this._connectionPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionPoolInput() {
      return this._connectionPool
    }

    // health_check - computed: false, optional: true, required: false
    private _healthCheck?: AppmeshVirtualGatewaySpecListenerHealthCheck | undefined; 
    private __healthCheckOutput = new AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference(this as any, "health_check", true);
    public get healthCheck() {
      return this.__healthCheckOutput;
    }
    public putHealthCheck(value: AppmeshVirtualGatewaySpecListenerHealthCheck | undefined) {
      this._healthCheck = value;
    }
    public resetHealthCheck() {
      this._healthCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckInput() {
      return this._healthCheck
    }

    // port_mapping - computed: false, optional: false, required: true
    private _portMapping?: AppmeshVirtualGatewaySpecListenerPortMapping; 
    private __portMappingOutput = new AppmeshVirtualGatewaySpecListenerPortMappingOutputReference(this as any, "port_mapping", true);
    public get portMapping() {
      return this.__portMappingOutput;
    }
    public putPortMapping(value: AppmeshVirtualGatewaySpecListenerPortMapping) {
      this._portMapping = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portMappingInput() {
      return this._portMapping
    }

    // tls - computed: false, optional: true, required: false
    private _tls?: AppmeshVirtualGatewaySpecListenerTls | undefined; 
    private __tlsOutput = new AppmeshVirtualGatewaySpecListenerTlsOutputReference(this as any, "tls", true);
    public get tls() {
      return this.__tlsOutput;
    }
    public putTls(value: AppmeshVirtualGatewaySpecListenerTls | undefined) {
      this._tls = value;
    }
    public resetTls() {
      this._tls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInput() {
      return this._tls
    }
  }
  export interface AppmeshVirtualGatewaySpecLoggingAccessLogFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}
    */
    readonly path: string;
  }

  function appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLogFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      path: cdktf.stringToTerraform(struct!.path),
    }
  }

  export class AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // path - computed: false, optional: false, required: true
    private _path?: string; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string) {
      this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }
  }
  export interface AppmeshVirtualGatewaySpecLoggingAccessLog {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecLoggingAccessLogFile;
  }

  function appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLog): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      file: appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct!.file),
    }
  }

  export class AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualGatewaySpecLoggingAccessLogFile | undefined; 
    private __fileOutput = new AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualGatewaySpecLoggingAccessLogFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }
  }
  export interface AppmeshVirtualGatewaySpecLogging {
    /**
    * access_log block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#access_log AppmeshVirtualGateway#access_log}
    */
    readonly accessLog?: AppmeshVirtualGatewaySpecLoggingAccessLog;
  }

  function appmeshVirtualGatewaySpecLoggingToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingOutputReference | AppmeshVirtualGatewaySpecLogging): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      access_log: appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct!.accessLog),
    }
  }

  export class AppmeshVirtualGatewaySpecLoggingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // access_log - computed: false, optional: true, required: false
    private _accessLog?: AppmeshVirtualGatewaySpecLoggingAccessLog | undefined; 
    private __accessLogOutput = new AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference(this as any, "access_log", true);
    public get accessLog() {
      return this.__accessLogOutput;
    }
    public putAccessLog(value: AppmeshVirtualGatewaySpecLoggingAccessLog | undefined) {
      this._accessLog = value;
    }
    public resetAccessLog() {
      this._accessLog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLogInput() {
      return this._accessLog
    }
  }
  export interface AppmeshVirtualGatewaySpec {
    /**
    * backend_defaults block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#backend_defaults AppmeshVirtualGateway#backend_defaults}
    */
    readonly backendDefaults?: AppmeshVirtualGatewaySpecBackendDefaults;
    /**
    * listener block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#listener AppmeshVirtualGateway#listener}
    */
    readonly listener: AppmeshVirtualGatewaySpecListener;
    /**
    * logging block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#logging AppmeshVirtualGateway#logging}
    */
    readonly logging?: AppmeshVirtualGatewaySpecLogging;
  }

  function appmeshVirtualGatewaySpecToTerraform(struct?: AppmeshVirtualGatewaySpecOutputReference | AppmeshVirtualGatewaySpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      backend_defaults: appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct!.backendDefaults),
      listener: appmeshVirtualGatewaySpecListenerToTerraform(struct!.listener),
      logging: appmeshVirtualGatewaySpecLoggingToTerraform(struct!.logging),
    }
  }

  export class AppmeshVirtualGatewaySpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // backend_defaults - computed: false, optional: true, required: false
    private _backendDefaults?: AppmeshVirtualGatewaySpecBackendDefaults | undefined; 
    private __backendDefaultsOutput = new AppmeshVirtualGatewaySpecBackendDefaultsOutputReference(this as any, "backend_defaults", true);
    public get backendDefaults() {
      return this.__backendDefaultsOutput;
    }
    public putBackendDefaults(value: AppmeshVirtualGatewaySpecBackendDefaults | undefined) {
      this._backendDefaults = value;
    }
    public resetBackendDefaults() {
      this._backendDefaults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backendDefaultsInput() {
      return this._backendDefaults
    }

    // listener - computed: false, optional: false, required: true
    private _listener?: AppmeshVirtualGatewaySpecListener; 
    private __listenerOutput = new AppmeshVirtualGatewaySpecListenerOutputReference(this as any, "listener", true);
    public get listener() {
      return this.__listenerOutput;
    }
    public putListener(value: AppmeshVirtualGatewaySpecListener) {
      this._listener = value;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerInput() {
      return this._listener
    }

    // logging - computed: false, optional: true, required: false
    private _logging?: AppmeshVirtualGatewaySpecLogging | undefined; 
    private __loggingOutput = new AppmeshVirtualGatewaySpecLoggingOutputReference(this as any, "logging", true);
    public get logging() {
      return this.__loggingOutput;
    }
    public putLogging(value: AppmeshVirtualGatewaySpecLogging | undefined) {
      this._logging = value;
    }
    public resetLogging() {
      this._logging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInput() {
      return this._logging
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway}
  */
  export class AppmeshVirtualGateway extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_virtual_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualGatewayConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshVirtualGatewayConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_virtual_gateway',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._meshName = config.meshName;
      this._meshOwner = config.meshOwner;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._spec = config.spec;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
    }

    // mesh_name - computed: false, optional: false, required: true
    private _meshName?: string; 
    public get meshName() {
      return this.getStringAttribute('mesh_name');
    }
    public set meshName(value: string) {
      this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get meshNameInput() {
      return this._meshName
    }

    // mesh_owner - computed: true, optional: true, required: false
    private _meshOwner?: string | undefined; 
    public get meshOwner() {
      return this.getStringAttribute('mesh_owner');
    }
    public set meshOwner(value: string | undefined) {
      this._meshOwner = value;
    }
    public resetMeshOwner() {
      this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get meshOwnerInput() {
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // resource_owner - computed: true, optional: false, required: false
    public get resourceOwner() {
      return this.getStringAttribute('resource_owner');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // spec - computed: false, optional: false, required: true
    private _spec?: AppmeshVirtualGatewaySpec; 
    private __specOutput = new AppmeshVirtualGatewaySpecOutputReference(this as any, "spec", true);
    public get spec() {
      return this.__specOutput;
    }
    public putSpec(value: AppmeshVirtualGatewaySpec) {
      this._spec = value;
    }
    // Temporarily expose input value. Use with caution.
    public get specInput() {
      return this._spec
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        mesh_name: cdktf.stringToTerraform(this._meshName),
        mesh_owner: cdktf.stringToTerraform(this._meshOwner),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        spec: appmeshVirtualGatewaySpecToTerraform(this._spec),
      };
    }
  }
  export interface AppmeshVirtualNodeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_name AppmeshVirtualNode#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_owner AppmeshVirtualNode#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#name AppmeshVirtualNode#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags AppmeshVirtualNode#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags_all AppmeshVirtualNode#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#spec AppmeshVirtualNode#spec}
    */
    readonly spec: AppmeshVirtualNodeSpec;
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
      private_key: cdktf.stringToTerraform(struct!.privateKey),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_chain - computed: false, optional: false, required: true
    private _certificateChain?: string; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
      this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }

    // private_key - computed: false, optional: false, required: true
    private _privateKey?: string; 
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string) {
      this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyInput() {
      return this._privateKey
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // secret_name - computed: false, optional: false, required: true
    private _secretName?: string; 
    public get secretName() {
      return this.getStringAttribute('secret_name');
    }
    public set secretName(value: string) {
      this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretNameInput() {
      return this._secretName
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile;
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      file: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct!.file),
      sds: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct!.sds),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined; 
    private __fileOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }

    // sds - computed: false, optional: true, required: false
    private _sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined; 
    private __sdsOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference(this as any, "sds", true);
    public get sds() {
      return this.__sdsOutput;
    }
    public putSds(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined) {
      this._sds = value;
    }
    public resetSds() {
      this._sds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdsInput() {
      return this._sds
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // exact - computed: false, optional: false, required: true
    private _exact?: string[]; 
    public get exact() {
      return this.getListAttribute('exact');
    }
    public set exact(value: string[]) {
      this._exact = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exactInput() {
      return this._exact
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      match: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // match - computed: false, optional: false, required: true
    private _match?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch; 
    private __matchOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this as any, "match", true);
    public get match() {
      return this.__matchOutput;
    }
    public putMatch(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch) {
      this._match = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
      return this._match
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_authority_arns - computed: false, optional: false, required: true
    private _certificateAuthorityArns?: string[]; 
    public get certificateAuthorityArns() {
      return this.getListAttribute('certificate_authority_arns');
    }
    public set certificateAuthorityArns(value: string[]) {
      this._certificateAuthorityArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnsInput() {
      return this._certificateAuthorityArns
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_chain - computed: false, optional: false, required: true
    private _certificateChain?: string; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
      this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // secret_name - computed: false, optional: false, required: true
    private _secretName?: string; 
    public get secretName() {
      return this.getStringAttribute('secret_name');
    }
    public set secretName(value: string) {
      this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretNameInput() {
      return this._secretName
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
    /**
    * acm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm;
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile;
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      acm: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct!.acm),
      file: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct!.file),
      sds: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct!.sds),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // acm - computed: false, optional: true, required: false
    private _acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined; 
    private __acmOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference(this as any, "acm", true);
    public get acm() {
      return this.__acmOutput;
    }
    public putAcm(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined) {
      this._acm = value;
    }
    public resetAcm() {
      this._acm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acmInput() {
      return this._acm
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined; 
    private __fileOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }

    // sds - computed: false, optional: true, required: false
    private _sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined; 
    private __sdsOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference(this as any, "sds", true);
    public get sds() {
      return this.__sdsOutput;
    }
    public putSds(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined) {
      this._sds = value;
    }
    public resetSds() {
      this._sds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdsInput() {
      return this._sds
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      subject_alternative_names: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
      trust: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct!.trust),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // subject_alternative_names - computed: false, optional: true, required: false
    private _subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined; 
    private __subjectAlternativeNamesOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
    public get subjectAlternativeNames() {
      return this.__subjectAlternativeNamesOutput;
    }
    public putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined) {
      this._subjectAlternativeNames = value;
    }
    public resetSubjectAlternativeNames() {
      this._subjectAlternativeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectAlternativeNamesInput() {
      return this._subjectAlternativeNames
    }

    // trust - computed: false, optional: false, required: true
    private _trust?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust; 
    private __trustOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference(this as any, "trust", true);
    public get trust() {
      return this.__trustOutput;
    }
    public putTrust(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust) {
      this._trust = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trustInput() {
      return this._trust
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate;
    /**
    * validation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
    */
    readonly validation: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enforce: cdktf.booleanToTerraform(struct!.enforce),
      ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
      certificate: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct!.certificate),
      validation: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct!.validation),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enforce - computed: false, optional: true, required: false
    private _enforce?: boolean | cdktf.IResolvable | undefined; 
    public get enforce() {
      return this.getBooleanAttribute('enforce') as any;
    }
    public set enforce(value: boolean | cdktf.IResolvable | undefined) {
      this._enforce = value;
    }
    public resetEnforce() {
      this._enforce = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceInput() {
      return this._enforce
    }

    // ports - computed: false, optional: true, required: false
    private _ports?: number[] | undefined; 
    public get ports() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ports') as any;
    }
    public set ports(value: number[] | undefined) {
      this._ports = value;
    }
    public resetPorts() {
      this._ports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portsInput() {
      return this._ports
    }

    // certificate - computed: false, optional: true, required: false
    private _certificate?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined; 
    private __certificateOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference(this as any, "certificate", true);
    public get certificate() {
      return this.__certificateOutput;
    }
    public putCertificate(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined) {
      this._certificate = value;
    }
    public resetCertificate() {
      this._certificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
      return this._certificate
    }

    // validation - computed: false, optional: false, required: true
    private _validation?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation; 
    private __validationOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference(this as any, "validation", true);
    public get validation() {
      return this.__validationOutput;
    }
    public putValidation(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation) {
      this._validation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
      return this._validation
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy {
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      tls: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct!.tls),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // tls - computed: false, optional: true, required: false
    private _tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined; 
    private __tlsOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference(this as any, "tls", true);
    public get tls() {
      return this.__tlsOutput;
    }
    public putTls(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined) {
      this._tls = value;
    }
    public resetTls() {
      this._tls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInput() {
      return this._tls
    }
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service_name AppmeshVirtualNode#virtual_service_name}
    */
    readonly virtualServiceName: string;
    /**
    * client_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference | AppmeshVirtualNodeSpecBackendVirtualService): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
      client_policy: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct!.clientPolicy),
    }
  }

  export class AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // virtual_service_name - computed: false, optional: false, required: true
    private _virtualServiceName?: string; 
    public get virtualServiceName() {
      return this.getStringAttribute('virtual_service_name');
    }
    public set virtualServiceName(value: string) {
      this._virtualServiceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualServiceNameInput() {
      return this._virtualServiceName
    }

    // client_policy - computed: false, optional: true, required: false
    private _clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined; 
    private __clientPolicyOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference(this as any, "client_policy", true);
    public get clientPolicy() {
      return this.__clientPolicyOutput;
    }
    public putClientPolicy(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined) {
      this._clientPolicy = value;
    }
    public resetClientPolicy() {
      this._clientPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientPolicyInput() {
      return this._clientPolicy
    }
  }
  export interface AppmeshVirtualNodeSpecBackend {
    /**
    * virtual_service block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service AppmeshVirtualNode#virtual_service}
    */
    readonly virtualService: AppmeshVirtualNodeSpecBackendVirtualService;
  }

  function appmeshVirtualNodeSpecBackendToTerraform(struct?: AppmeshVirtualNodeSpecBackend): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_service: appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct!.virtualService),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
      private_key: cdktf.stringToTerraform(struct!.privateKey),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_chain - computed: false, optional: false, required: true
    private _certificateChain?: string; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
      this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }

    // private_key - computed: false, optional: false, required: true
    private _privateKey?: string; 
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string) {
      this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyInput() {
      return this._privateKey
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // secret_name - computed: false, optional: false, required: true
    private _secretName?: string; 
    public get secretName() {
      return this.getStringAttribute('secret_name');
    }
    public set secretName(value: string) {
      this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretNameInput() {
      return this._secretName
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile;
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      file: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct!.file),
      sds: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct!.sds),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined; 
    private __fileOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }

    // sds - computed: false, optional: true, required: false
    private _sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined; 
    private __sdsOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(this as any, "sds", true);
    public get sds() {
      return this.__sdsOutput;
    }
    public putSds(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined) {
      this._sds = value;
    }
    public resetSds() {
      this._sds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdsInput() {
      return this._sds
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // exact - computed: false, optional: false, required: true
    private _exact?: string[]; 
    public get exact() {
      return this.getListAttribute('exact');
    }
    public set exact(value: string[]) {
      this._exact = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exactInput() {
      return this._exact
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      match: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // match - computed: false, optional: false, required: true
    private _match?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch; 
    private __matchOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this as any, "match", true);
    public get match() {
      return this.__matchOutput;
    }
    public putMatch(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch) {
      this._match = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
      return this._match
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_authority_arns - computed: false, optional: false, required: true
    private _certificateAuthorityArns?: string[]; 
    public get certificateAuthorityArns() {
      return this.getListAttribute('certificate_authority_arns');
    }
    public set certificateAuthorityArns(value: string[]) {
      this._certificateAuthorityArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateAuthorityArnsInput() {
      return this._certificateAuthorityArns
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_chain - computed: false, optional: false, required: true
    private _certificateChain?: string; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
      this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // secret_name - computed: false, optional: false, required: true
    private _secretName?: string; 
    public get secretName() {
      return this.getStringAttribute('secret_name');
    }
    public set secretName(value: string) {
      this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretNameInput() {
      return this._secretName
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
    /**
    * acm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile;
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      acm: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct!.acm),
      file: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct!.file),
      sds: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct!.sds),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // acm - computed: false, optional: true, required: false
    private _acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined; 
    private __acmOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(this as any, "acm", true);
    public get acm() {
      return this.__acmOutput;
    }
    public putAcm(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined) {
      this._acm = value;
    }
    public resetAcm() {
      this._acm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acmInput() {
      return this._acm
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined; 
    private __fileOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }

    // sds - computed: false, optional: true, required: false
    private _sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined; 
    private __sdsOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(this as any, "sds", true);
    public get sds() {
      return this.__sdsOutput;
    }
    public putSds(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined) {
      this._sds = value;
    }
    public resetSds() {
      this._sds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdsInput() {
      return this._sds
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      subject_alternative_names: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
      trust: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct!.trust),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // subject_alternative_names - computed: false, optional: true, required: false
    private _subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined; 
    private __subjectAlternativeNamesOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
    public get subjectAlternativeNames() {
      return this.__subjectAlternativeNamesOutput;
    }
    public putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined) {
      this._subjectAlternativeNames = value;
    }
    public resetSubjectAlternativeNames() {
      this._subjectAlternativeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectAlternativeNamesInput() {
      return this._subjectAlternativeNames
    }

    // trust - computed: false, optional: false, required: true
    private _trust?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust; 
    private __trustOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(this as any, "trust", true);
    public get trust() {
      return this.__trustOutput;
    }
    public putTrust(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust) {
      this._trust = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trustInput() {
      return this._trust
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate;
    /**
    * validation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
    */
    readonly validation: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enforce: cdktf.booleanToTerraform(struct!.enforce),
      ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
      certificate: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct!.certificate),
      validation: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct!.validation),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enforce - computed: false, optional: true, required: false
    private _enforce?: boolean | cdktf.IResolvable | undefined; 
    public get enforce() {
      return this.getBooleanAttribute('enforce') as any;
    }
    public set enforce(value: boolean | cdktf.IResolvable | undefined) {
      this._enforce = value;
    }
    public resetEnforce() {
      this._enforce = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceInput() {
      return this._enforce
    }

    // ports - computed: false, optional: true, required: false
    private _ports?: number[] | undefined; 
    public get ports() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('ports') as any;
    }
    public set ports(value: number[] | undefined) {
      this._ports = value;
    }
    public resetPorts() {
      this._ports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portsInput() {
      return this._ports
    }

    // certificate - computed: false, optional: true, required: false
    private _certificate?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined; 
    private __certificateOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference(this as any, "certificate", true);
    public get certificate() {
      return this.__certificateOutput;
    }
    public putCertificate(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined) {
      this._certificate = value;
    }
    public resetCertificate() {
      this._certificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
      return this._certificate
    }

    // validation - computed: false, optional: false, required: true
    private _validation?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation; 
    private __validationOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference(this as any, "validation", true);
    public get validation() {
      return this.__validationOutput;
    }
    public putValidation(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation) {
      this._validation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
      return this._validation
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicy {
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      tls: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct!.tls),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // tls - computed: false, optional: true, required: false
    private _tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined; 
    private __tlsOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference(this as any, "tls", true);
    public get tls() {
      return this.__tlsOutput;
    }
    public putTls(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined) {
      this._tls = value;
    }
    public resetTls() {
      this._tls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInput() {
      return this._tls
    }
  }
  export interface AppmeshVirtualNodeSpecBackendDefaults {
    /**
    * client_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy;
  }

  function appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsOutputReference | AppmeshVirtualNodeSpecBackendDefaults): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      client_policy: appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct!.clientPolicy),
    }
  }

  export class AppmeshVirtualNodeSpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // client_policy - computed: false, optional: true, required: false
    private _clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined; 
    private __clientPolicyOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference(this as any, "client_policy", true);
    public get clientPolicy() {
      return this.__clientPolicyOutput;
    }
    public putClientPolicy(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined) {
      this._clientPolicy = value;
    }
    public resetClientPolicy() {
      this._clientPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientPolicyInput() {
      return this._clientPolicy
    }
  }
  export interface AppmeshVirtualNodeSpecListenerConnectionPoolGrpc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}
    */
    readonly maxRequests: number;
  }

  function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    }
  }

  export class AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_requests - computed: false, optional: false, required: true
    private _maxRequests?: number; 
    public get maxRequests() {
      return this.getNumberAttribute('max_requests');
    }
    public set maxRequests(value: number) {
      this._maxRequests = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRequestsInput() {
      return this._maxRequests
    }
  }
  export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}
    */
    readonly maxConnections: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_pending_requests AppmeshVirtualNode#max_pending_requests}
    */
    readonly maxPendingRequests?: number;
  }

  function appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolHttp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_connections: cdktf.numberToTerraform(struct!.maxConnections),
      max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    }
  }

  export class AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_connections - computed: false, optional: false, required: true
    private _maxConnections?: number; 
    public get maxConnections() {
      return this.getNumberAttribute('max_connections');
    }
    public set maxConnections(value: number) {
      this._maxConnections = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConnectionsInput() {
      return this._maxConnections
    }

    // max_pending_requests - computed: false, optional: true, required: false
    private _maxPendingRequests?: number | undefined; 
    public get maxPendingRequests() {
      return this.getNumberAttribute('max_pending_requests');
    }
    public set maxPendingRequests(value: number | undefined) {
      this._maxPendingRequests = value;
    }
    public resetMaxPendingRequests() {
      this._maxPendingRequests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPendingRequestsInput() {
      return this._maxPendingRequests
    }
  }
  export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}
    */
    readonly maxRequests: number;
  }

  function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolHttp2): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    }
  }

  export class AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_requests - computed: false, optional: false, required: true
    private _maxRequests?: number; 
    public get maxRequests() {
      return this.getNumberAttribute('max_requests');
    }
    public set maxRequests(value: number) {
      this._maxRequests = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRequestsInput() {
      return this._maxRequests
    }
  }
  export interface AppmeshVirtualNodeSpecListenerConnectionPoolTcp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}
    */
    readonly maxConnections: number;
  }

  function appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolTcp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    }
  }

  export class AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_connections - computed: false, optional: false, required: true
    private _maxConnections?: number; 
    public get maxConnections() {
      return this.getNumberAttribute('max_connections');
    }
    public set maxConnections(value: number) {
      this._maxConnections = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConnectionsInput() {
      return this._maxConnections
    }
  }
  export interface AppmeshVirtualNodeSpecListenerConnectionPool {
    /**
    * grpc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
    */
    readonly grpc?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc;
    /**
    * http block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
    */
    readonly http?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp;
    /**
    * http2 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
    */
    readonly http2?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2;
    /**
    * tcp block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
    */
    readonly tcp?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp;
  }

  function appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference | AppmeshVirtualNodeSpecListenerConnectionPool): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      grpc: appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct!.grpc),
      http: appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct!.http),
      http2: appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct!.http2),
      tcp: appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct!.tcp),
    }
  }

  export class AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // grpc - computed: false, optional: true, required: false
    private _grpc?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined; 
    private __grpcOutput = new AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference(this as any, "grpc", true);
    public get grpc() {
      return this.__grpcOutput;
    }
    public putGrpc(value: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined) {
      this._grpc = value;
    }
    public resetGrpc() {
      this._grpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grpcInput() {
      return this._grpc
    }

    // http - computed: false, optional: true, required: false
    private _http?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp | undefined; 
    private __httpOutput = new AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference(this as any, "http", true);
    public get http() {
      return this.__httpOutput;
    }
    public putHttp(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp | undefined) {
      this._http = value;
    }
    public resetHttp() {
      this._http = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpInput() {
      return this._http
    }

    // http2 - computed: false, optional: true, required: false
    private _http2?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | undefined; 
    private __http2Output = new AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference(this as any, "http2", true);
    public get http2() {
      return this.__http2Output;
    }
    public putHttp2(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | undefined) {
      this._http2 = value;
    }
    public resetHttp2() {
      this._http2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get http2Input() {
      return this._http2
    }

    // tcp - computed: false, optional: true, required: false
    private _tcp?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp | undefined; 
    private __tcpOutput = new AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference(this as any, "tcp", true);
    public get tcp() {
      return this.__tcpOutput;
    }
    public putTcp(value: AppmeshVirtualNodeSpecListenerConnectionPoolTcp | undefined) {
      this._tcp = value;
    }
    public resetTcp() {
      this._tcp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcpInput() {
      return this._tcp
    }
  }
  export interface AppmeshVirtualNodeSpecListenerHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#healthy_threshold AppmeshVirtualNode#healthy_threshold}
    */
    readonly healthyThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval_millis AppmeshVirtualNode#interval_millis}
    */
    readonly intervalMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout_millis AppmeshVirtualNode#timeout_millis}
    */
    readonly timeoutMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unhealthy_threshold AppmeshVirtualNode#unhealthy_threshold}
    */
    readonly unhealthyThreshold: number;
  }

  function appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualNodeSpecListenerHealthCheckOutputReference | AppmeshVirtualNodeSpecListenerHealthCheck): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
      interval_millis: cdktf.numberToTerraform(struct!.intervalMillis),
      path: cdktf.stringToTerraform(struct!.path),
      port: cdktf.numberToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      timeout_millis: cdktf.numberToTerraform(struct!.timeoutMillis),
      unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    }
  }

  export class AppmeshVirtualNodeSpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // healthy_threshold - computed: false, optional: false, required: true
    private _healthyThreshold?: number; 
    public get healthyThreshold() {
      return this.getNumberAttribute('healthy_threshold');
    }
    public set healthyThreshold(value: number) {
      this._healthyThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    public get healthyThresholdInput() {
      return this._healthyThreshold
    }

    // interval_millis - computed: false, optional: false, required: true
    private _intervalMillis?: number; 
    public get intervalMillis() {
      return this.getNumberAttribute('interval_millis');
    }
    public set intervalMillis(value: number) {
      this._intervalMillis = value;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalMillisInput() {
      return this._intervalMillis
    }

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // port - computed: true, optional: true, required: false
    private _port?: number | undefined; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number | undefined) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // timeout_millis - computed: false, optional: false, required: true
    private _timeoutMillis?: number; 
    public get timeoutMillis() {
      return this.getNumberAttribute('timeout_millis');
    }
    public set timeoutMillis(value: number) {
      this._timeoutMillis = value;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutMillisInput() {
      return this._timeoutMillis
    }

    // unhealthy_threshold - computed: false, optional: false, required: true
    private _unhealthyThreshold?: number; 
    public get unhealthyThreshold() {
      return this.getNumberAttribute('unhealthy_threshold');
    }
    public set unhealthyThreshold(value: number) {
      this._unhealthyThreshold = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unhealthyThresholdInput() {
      return this._unhealthyThreshold
    }
  }
  export interface AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshVirtualNodeSpecListenerOutlierDetectionInterval {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshVirtualNodeSpecListenerOutlierDetection {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_ejection_percent AppmeshVirtualNode#max_ejection_percent}
    */
    readonly maxEjectionPercent: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_server_errors AppmeshVirtualNode#max_server_errors}
    */
    readonly maxServerErrors: number;
    /**
    * base_ejection_duration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#base_ejection_duration AppmeshVirtualNode#base_ejection_duration}
    */
    readonly baseEjectionDuration: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration;
    /**
    * interval block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval AppmeshVirtualNode#interval}
    */
    readonly interval: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval;
  }

  function appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetection): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
      max_server_errors: cdktf.numberToTerraform(struct!.maxServerErrors),
      base_ejection_duration: appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct!.baseEjectionDuration),
      interval: appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct!.interval),
    }
  }

  export class AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // max_ejection_percent - computed: false, optional: false, required: true
    private _maxEjectionPercent?: number; 
    public get maxEjectionPercent() {
      return this.getNumberAttribute('max_ejection_percent');
    }
    public set maxEjectionPercent(value: number) {
      this._maxEjectionPercent = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxEjectionPercentInput() {
      return this._maxEjectionPercent
    }

    // max_server_errors - computed: false, optional: false, required: true
    private _maxServerErrors?: number; 
    public get maxServerErrors() {
      return this.getNumberAttribute('max_server_errors');
    }
    public set maxServerErrors(value: number) {
      this._maxServerErrors = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxServerErrorsInput() {
      return this._maxServerErrors
    }

    // base_ejection_duration - computed: false, optional: false, required: true
    private _baseEjectionDuration?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration; 
    private __baseEjectionDurationOutput = new AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference(this as any, "base_ejection_duration", true);
    public get baseEjectionDuration() {
      return this.__baseEjectionDurationOutput;
    }
    public putBaseEjectionDuration(value: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration) {
      this._baseEjectionDuration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get baseEjectionDurationInput() {
      return this._baseEjectionDuration
    }

    // interval - computed: false, optional: false, required: true
    private _interval?: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval; 
    private __intervalOutput = new AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference(this as any, "interval", true);
    public get interval() {
      return this.__intervalOutput;
    }
    public putInterval(value: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval) {
      this._interval = value;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
      return this._interval
    }
  }
  export interface AppmeshVirtualNodeSpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}
    */
    readonly protocol: string;
  }

  function appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualNodeSpecListenerPortMappingOutputReference | AppmeshVirtualNodeSpecListenerPortMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      port: cdktf.numberToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
    }
  }

  export class AppmeshVirtualNodeSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // port - computed: false, optional: false, required: true
    private _port?: number; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number) {
      this._port = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeoutGrpc {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle;
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest;
  }

  function appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      idle: appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct!.idle),
      per_request: appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct!.perRequest),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // idle - computed: false, optional: true, required: false
    private _idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined; 
    private __idleOutput = new AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference(this as any, "idle", true);
    public get idle() {
      return this.__idleOutput;
    }
    public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined) {
      this._idle = value;
    }
    public resetIdle() {
      this._idle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleInput() {
      return this._idle
    }

    // per_request - computed: false, optional: true, required: false
    private _perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined; 
    private __perRequestOutput = new AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference(this as any, "per_request", true);
    public get perRequest() {
      return this.__perRequestOutput;
    }
    public putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined) {
      this._perRequest = value;
    }
    public resetPerRequest() {
      this._perRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perRequestInput() {
      return this._perRequest
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeoutHttpIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeoutHttp {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle;
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest;
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      idle: appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct!.idle),
      per_request: appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct!.perRequest),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // idle - computed: false, optional: true, required: false
    private _idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined; 
    private __idleOutput = new AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference(this as any, "idle", true);
    public get idle() {
      return this.__idleOutput;
    }
    public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined) {
      this._idle = value;
    }
    public resetIdle() {
      this._idle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleInput() {
      return this._idle
    }

    // per_request - computed: false, optional: true, required: false
    private _perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined; 
    private __perRequestOutput = new AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference(this as any, "per_request", true);
    public get perRequest() {
      return this.__perRequestOutput;
    }
    public putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined) {
      this._perRequest = value;
    }
    public resetPerRequest() {
      this._perRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perRequestInput() {
      return this._perRequest
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2 {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle;
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest;
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      idle: appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct!.idle),
      per_request: appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct!.perRequest),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // idle - computed: false, optional: true, required: false
    private _idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined; 
    private __idleOutput = new AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference(this as any, "idle", true);
    public get idle() {
      return this.__idleOutput;
    }
    public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined) {
      this._idle = value;
    }
    public resetIdle() {
      this._idle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleInput() {
      return this._idle
    }

    // per_request - computed: false, optional: true, required: false
    private _perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined; 
    private __perRequestOutput = new AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference(this as any, "per_request", true);
    public get perRequest() {
      return this.__perRequestOutput;
    }
    public putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined) {
      this._perRequest = value;
    }
    public resetPerRequest() {
      this._perRequest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perRequestInput() {
      return this._perRequest
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeoutTcpIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // unit - computed: false, optional: false, required: true
    private _unit?: string; 
    public get unit() {
      return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
      this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
      return this._unit
    }

    // value - computed: false, optional: false, required: true
    private _value?: number; 
    public get value() {
      return this.getNumberAttribute('value');
    }
    public set value(value: number) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeoutTcp {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle;
  }

  function appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      idle: appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct!.idle),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // idle - computed: false, optional: true, required: false
    private _idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined; 
    private __idleOutput = new AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference(this as any, "idle", true);
    public get idle() {
      return this.__idleOutput;
    }
    public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined) {
      this._idle = value;
    }
    public resetIdle() {
      this._idle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idleInput() {
      return this._idle
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTimeout {
    /**
    * grpc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
    */
    readonly grpc?: AppmeshVirtualNodeSpecListenerTimeoutGrpc;
    /**
    * http block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
    */
    readonly http?: AppmeshVirtualNodeSpecListenerTimeoutHttp;
    /**
    * http2 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
    */
    readonly http2?: AppmeshVirtualNodeSpecListenerTimeoutHttp2;
    /**
    * tcp block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
    */
    readonly tcp?: AppmeshVirtualNodeSpecListenerTimeoutTcp;
  }

  function appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutOutputReference | AppmeshVirtualNodeSpecListenerTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      grpc: appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct!.grpc),
      http: appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct!.http),
      http2: appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct!.http2),
      tcp: appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct!.tcp),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTimeoutOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // grpc - computed: false, optional: true, required: false
    private _grpc?: AppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined; 
    private __grpcOutput = new AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference(this as any, "grpc", true);
    public get grpc() {
      return this.__grpcOutput;
    }
    public putGrpc(value: AppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined) {
      this._grpc = value;
    }
    public resetGrpc() {
      this._grpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grpcInput() {
      return this._grpc
    }

    // http - computed: false, optional: true, required: false
    private _http?: AppmeshVirtualNodeSpecListenerTimeoutHttp | undefined; 
    private __httpOutput = new AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference(this as any, "http", true);
    public get http() {
      return this.__httpOutput;
    }
    public putHttp(value: AppmeshVirtualNodeSpecListenerTimeoutHttp | undefined) {
      this._http = value;
    }
    public resetHttp() {
      this._http = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpInput() {
      return this._http
    }

    // http2 - computed: false, optional: true, required: false
    private _http2?: AppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined; 
    private __http2Output = new AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference(this as any, "http2", true);
    public get http2() {
      return this.__http2Output;
    }
    public putHttp2(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined) {
      this._http2 = value;
    }
    public resetHttp2() {
      this._http2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get http2Input() {
      return this._http2
    }

    // tcp - computed: false, optional: true, required: false
    private _tcp?: AppmeshVirtualNodeSpecListenerTimeoutTcp | undefined; 
    private __tcpOutput = new AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference(this as any, "tcp", true);
    public get tcp() {
      return this.__tcpOutput;
    }
    public putTcp(value: AppmeshVirtualNodeSpecListenerTimeoutTcp | undefined) {
      this._tcp = value;
    }
    public resetTcp() {
      this._tcp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tcpInput() {
      return this._tcp
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTlsCertificateAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_arn AppmeshVirtualNode#certificate_arn}
    */
    readonly certificateArn: string;
  }

  function appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateAcm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_arn - computed: false, optional: false, required: true
    private _certificateArn?: string; 
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
      this._certificateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
      return this._certificateArn
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
  }

  function appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
      private_key: cdktf.stringToTerraform(struct!.privateKey),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_chain - computed: false, optional: false, required: true
    private _certificateChain?: string; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
      this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }

    // private_key - computed: false, optional: false, required: true
    private _privateKey?: string; 
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }
    public set privateKey(value: string) {
      this._privateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get privateKeyInput() {
      return this._privateKey
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // secret_name - computed: false, optional: false, required: true
    private _secretName?: string; 
    public get secretName() {
      return this.getStringAttribute('secret_name');
    }
    public set secretName(value: string) {
      this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretNameInput() {
      return this._secretName
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTlsCertificate {
    /**
    * acm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm;
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile;
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecListenerTlsCertificateSds;
  }

  function appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      acm: appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct!.acm),
      file: appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct!.file),
      sds: appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct!.sds),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // acm - computed: false, optional: true, required: false
    private _acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined; 
    private __acmOutput = new AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference(this as any, "acm", true);
    public get acm() {
      return this.__acmOutput;
    }
    public putAcm(value: AppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined) {
      this._acm = value;
    }
    public resetAcm() {
      this._acm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acmInput() {
      return this._acm
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined; 
    private __fileOutput = new AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }

    // sds - computed: false, optional: true, required: false
    private _sds?: AppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined; 
    private __sdsOutput = new AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference(this as any, "sds", true);
    public get sds() {
      return this.__sdsOutput;
    }
    public putSds(value: AppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined) {
      this._sds = value;
    }
    public resetSds() {
      this._sds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdsInput() {
      return this._sds
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
  }

  function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // exact - computed: false, optional: false, required: true
    private _exact?: string[]; 
    public get exact() {
      return this.getListAttribute('exact');
    }
    public set exact(value: string[]) {
      this._exact = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exactInput() {
      return this._exact
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames {
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch;
  }

  function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      match: appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // match - computed: false, optional: false, required: true
    private _match?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch; 
    private __matchOutput = new AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(this as any, "match", true);
    public get match() {
      return this.__matchOutput;
    }
    public putMatch(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch) {
      this._match = value;
    }
    // Temporarily expose input value. Use with caution.
    public get matchInput() {
      return this._match
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
  }

  function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // certificate_chain - computed: false, optional: false, required: true
    private _certificateChain?: string; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string) {
      this._certificateChain = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // secret_name - computed: false, optional: false, required: true
    private _secretName?: string; 
    public get secretName() {
      return this.getStringAttribute('secret_name');
    }
    public set secretName(value: string) {
      this._secretName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretNameInput() {
      return this._secretName
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTlsValidationTrust {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile;
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds;
  }

  function appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrust): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      file: appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct!.file),
      sds: appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct!.sds),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined; 
    private __fileOutput = new AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }

    // sds - computed: false, optional: true, required: false
    private _sds?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined; 
    private __sdsOutput = new AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference(this as any, "sds", true);
    public get sds() {
      return this.__sdsOutput;
    }
    public putSds(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined) {
      this._sds = value;
    }
    public resetSds() {
      this._sds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sdsInput() {
      return this._sds
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTlsValidation {
    /**
    * subject_alternative_names block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames;
    /**
    * trust block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecListenerTlsValidationTrust;
  }

  function appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationOutputReference | AppmeshVirtualNodeSpecListenerTlsValidation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      subject_alternative_names: appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
      trust: appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct!.trust),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // subject_alternative_names - computed: false, optional: true, required: false
    private _subjectAlternativeNames?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined; 
    private __subjectAlternativeNamesOutput = new AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
    public get subjectAlternativeNames() {
      return this.__subjectAlternativeNamesOutput;
    }
    public putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined) {
      this._subjectAlternativeNames = value;
    }
    public resetSubjectAlternativeNames() {
      this._subjectAlternativeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectAlternativeNamesInput() {
      return this._subjectAlternativeNames
    }

    // trust - computed: false, optional: false, required: true
    private _trust?: AppmeshVirtualNodeSpecListenerTlsValidationTrust; 
    private __trustOutput = new AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference(this as any, "trust", true);
    public get trust() {
      return this.__trustOutput;
    }
    public putTrust(value: AppmeshVirtualNodeSpecListenerTlsValidationTrust) {
      this._trust = value;
    }
    // Temporarily expose input value. Use with caution.
    public get trustInput() {
      return this._trust
    }
  }
  export interface AppmeshVirtualNodeSpecListenerTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mode AppmeshVirtualNode#mode}
    */
    readonly mode: string;
    /**
    * certificate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate: AppmeshVirtualNodeSpecListenerTlsCertificate;
    /**
    * validation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
    */
    readonly validation?: AppmeshVirtualNodeSpecListenerTlsValidation;
  }

  function appmeshVirtualNodeSpecListenerTlsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsOutputReference | AppmeshVirtualNodeSpecListenerTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      mode: cdktf.stringToTerraform(struct!.mode),
      certificate: appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct!.certificate),
      validation: appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct!.validation),
    }
  }

  export class AppmeshVirtualNodeSpecListenerTlsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // mode - computed: false, optional: false, required: true
    private _mode?: string; 
    public get mode() {
      return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
      this._mode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
      return this._mode
    }

    // certificate - computed: false, optional: false, required: true
    private _certificate?: AppmeshVirtualNodeSpecListenerTlsCertificate; 
    private __certificateOutput = new AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference(this as any, "certificate", true);
    public get certificate() {
      return this.__certificateOutput;
    }
    public putCertificate(value: AppmeshVirtualNodeSpecListenerTlsCertificate) {
      this._certificate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
      return this._certificate
    }

    // validation - computed: false, optional: true, required: false
    private _validation?: AppmeshVirtualNodeSpecListenerTlsValidation | undefined; 
    private __validationOutput = new AppmeshVirtualNodeSpecListenerTlsValidationOutputReference(this as any, "validation", true);
    public get validation() {
      return this.__validationOutput;
    }
    public putValidation(value: AppmeshVirtualNodeSpecListenerTlsValidation | undefined) {
      this._validation = value;
    }
    public resetValidation() {
      this._validation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationInput() {
      return this._validation
    }
  }
  export interface AppmeshVirtualNodeSpecListener {
    /**
    * connection_pool block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#connection_pool AppmeshVirtualNode#connection_pool}
    */
    readonly connectionPool?: AppmeshVirtualNodeSpecListenerConnectionPool;
    /**
    * health_check block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#health_check AppmeshVirtualNode#health_check}
    */
    readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck;
    /**
    * outlier_detection block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#outlier_detection AppmeshVirtualNode#outlier_detection}
    */
    readonly outlierDetection?: AppmeshVirtualNodeSpecListenerOutlierDetection;
    /**
    * port_mapping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port_mapping AppmeshVirtualNode#port_mapping}
    */
    readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping;
    /**
    * timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout AppmeshVirtualNode#timeout}
    */
    readonly timeout?: AppmeshVirtualNodeSpecListenerTimeout;
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecListenerTls;
  }

  function appmeshVirtualNodeSpecListenerToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutputReference | AppmeshVirtualNodeSpecListener): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      connection_pool: appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct!.connectionPool),
      health_check: appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct!.healthCheck),
      outlier_detection: appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct!.outlierDetection),
      port_mapping: appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct!.portMapping),
      timeout: appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct!.timeout),
      tls: appmeshVirtualNodeSpecListenerTlsToTerraform(struct!.tls),
    }
  }

  export class AppmeshVirtualNodeSpecListenerOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // connection_pool - computed: false, optional: true, required: false
    private _connectionPool?: AppmeshVirtualNodeSpecListenerConnectionPool | undefined; 
    private __connectionPoolOutput = new AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference(this as any, "connection_pool", true);
    public get connectionPool() {
      return this.__connectionPoolOutput;
    }
    public putConnectionPool(value: AppmeshVirtualNodeSpecListenerConnectionPool | undefined) {
      this._connectionPool = value;
    }
    public resetConnectionPool() {
      this._connectionPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionPoolInput() {
      return this._connectionPool
    }

    // health_check - computed: false, optional: true, required: false
    private _healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck | undefined; 
    private __healthCheckOutput = new AppmeshVirtualNodeSpecListenerHealthCheckOutputReference(this as any, "health_check", true);
    public get healthCheck() {
      return this.__healthCheckOutput;
    }
    public putHealthCheck(value: AppmeshVirtualNodeSpecListenerHealthCheck | undefined) {
      this._healthCheck = value;
    }
    public resetHealthCheck() {
      this._healthCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckInput() {
      return this._healthCheck
    }

    // outlier_detection - computed: false, optional: true, required: false
    private _outlierDetection?: AppmeshVirtualNodeSpecListenerOutlierDetection | undefined; 
    private __outlierDetectionOutput = new AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference(this as any, "outlier_detection", true);
    public get outlierDetection() {
      return this.__outlierDetectionOutput;
    }
    public putOutlierDetection(value: AppmeshVirtualNodeSpecListenerOutlierDetection | undefined) {
      this._outlierDetection = value;
    }
    public resetOutlierDetection() {
      this._outlierDetection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outlierDetectionInput() {
      return this._outlierDetection
    }

    // port_mapping - computed: false, optional: false, required: true
    private _portMapping?: AppmeshVirtualNodeSpecListenerPortMapping; 
    private __portMappingOutput = new AppmeshVirtualNodeSpecListenerPortMappingOutputReference(this as any, "port_mapping", true);
    public get portMapping() {
      return this.__portMappingOutput;
    }
    public putPortMapping(value: AppmeshVirtualNodeSpecListenerPortMapping) {
      this._portMapping = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portMappingInput() {
      return this._portMapping
    }

    // timeout - computed: false, optional: true, required: false
    private _timeout?: AppmeshVirtualNodeSpecListenerTimeout | undefined; 
    private __timeoutOutput = new AppmeshVirtualNodeSpecListenerTimeoutOutputReference(this as any, "timeout", true);
    public get timeout() {
      return this.__timeoutOutput;
    }
    public putTimeout(value: AppmeshVirtualNodeSpecListenerTimeout | undefined) {
      this._timeout = value;
    }
    public resetTimeout() {
      this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
      return this._timeout
    }

    // tls - computed: false, optional: true, required: false
    private _tls?: AppmeshVirtualNodeSpecListenerTls | undefined; 
    private __tlsOutput = new AppmeshVirtualNodeSpecListenerTlsOutputReference(this as any, "tls", true);
    public get tls() {
      return this.__tlsOutput;
    }
    public putTls(value: AppmeshVirtualNodeSpecListenerTls | undefined) {
      this._tls = value;
    }
    public resetTls() {
      this._tls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsInput() {
      return this._tls
    }
  }
  export interface AppmeshVirtualNodeSpecLoggingAccessLogFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}
    */
    readonly path: string;
  }

  function appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference | AppmeshVirtualNodeSpecLoggingAccessLogFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      path: cdktf.stringToTerraform(struct!.path),
    }
  }

  export class AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // path - computed: false, optional: false, required: true
    private _path?: string; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string) {
      this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }
  }
  export interface AppmeshVirtualNodeSpecLoggingAccessLog {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecLoggingAccessLogFile;
  }

  function appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogOutputReference | AppmeshVirtualNodeSpecLoggingAccessLog): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      file: appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct!.file),
    }
  }

  export class AppmeshVirtualNodeSpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // file - computed: false, optional: true, required: false
    private _file?: AppmeshVirtualNodeSpecLoggingAccessLogFile | undefined; 
    private __fileOutput = new AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference(this as any, "file", true);
    public get file() {
      return this.__fileOutput;
    }
    public putFile(value: AppmeshVirtualNodeSpecLoggingAccessLogFile | undefined) {
      this._file = value;
    }
    public resetFile() {
      this._file = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileInput() {
      return this._file
    }
  }
  export interface AppmeshVirtualNodeSpecLogging {
    /**
    * access_log block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#access_log AppmeshVirtualNode#access_log}
    */
    readonly accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog;
  }

  function appmeshVirtualNodeSpecLoggingToTerraform(struct?: AppmeshVirtualNodeSpecLoggingOutputReference | AppmeshVirtualNodeSpecLogging): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      access_log: appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct!.accessLog),
    }
  }

  export class AppmeshVirtualNodeSpecLoggingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // access_log - computed: false, optional: true, required: false
    private _accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog | undefined; 
    private __accessLogOutput = new AppmeshVirtualNodeSpecLoggingAccessLogOutputReference(this as any, "access_log", true);
    public get accessLog() {
      return this.__accessLogOutput;
    }
    public putAccessLog(value: AppmeshVirtualNodeSpecLoggingAccessLog | undefined) {
      this._accessLog = value;
    }
    public resetAccessLog() {
      this._accessLog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLogInput() {
      return this._accessLog
    }
  }
  export interface AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#attributes AppmeshVirtualNode#attributes}
    */
    readonly attributes?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#namespace_name AppmeshVirtualNode#namespace_name}
    */
    readonly namespaceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_name AppmeshVirtualNode#service_name}
    */
    readonly serviceName: string;
  }

  function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
      namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
      service_name: cdktf.stringToTerraform(struct!.serviceName),
    }
  }

  export class AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // attributes - computed: false, optional: true, required: false
    private _attributes?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get attributes() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('attributes') as any;
    }
    public set attributes(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._attributes = value;
    }
    public resetAttributes() {
      this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
      return this._attributes
    }

    // namespace_name - computed: false, optional: false, required: true
    private _namespaceName?: string; 
    public get namespaceName() {
      return this.getStringAttribute('namespace_name');
    }
    public set namespaceName(value: string) {
      this._namespaceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceNameInput() {
      return this._namespaceName
    }

    // service_name - computed: false, optional: false, required: true
    private _serviceName?: string; 
    public get serviceName() {
      return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
      this._serviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
      return this._serviceName
    }
  }
  export interface AppmeshVirtualNodeSpecServiceDiscoveryDns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#hostname AppmeshVirtualNode#hostname}
    */
    readonly hostname: string;
  }

  function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryDns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      hostname: cdktf.stringToTerraform(struct!.hostname),
    }
  }

  export class AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // hostname - computed: false, optional: false, required: true
    private _hostname?: string; 
    public get hostname() {
      return this.getStringAttribute('hostname');
    }
    public set hostname(value: string) {
      this._hostname = value;
    }
    // Temporarily expose input value. Use with caution.
    public get hostnameInput() {
      return this._hostname
    }
  }
  export interface AppmeshVirtualNodeSpecServiceDiscovery {
    /**
    * aws_cloud_map block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#aws_cloud_map AppmeshVirtualNode#aws_cloud_map}
    */
    readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap;
    /**
    * dns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#dns AppmeshVirtualNode#dns}
    */
    readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns;
  }

  function appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryOutputReference | AppmeshVirtualNodeSpecServiceDiscovery): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      aws_cloud_map: appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct!.awsCloudMap),
      dns: appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct!.dns),
    }
  }

  export class AppmeshVirtualNodeSpecServiceDiscoveryOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // aws_cloud_map - computed: false, optional: true, required: false
    private _awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined; 
    private __awsCloudMapOutput = new AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference(this as any, "aws_cloud_map", true);
    public get awsCloudMap() {
      return this.__awsCloudMapOutput;
    }
    public putAwsCloudMap(value: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined) {
      this._awsCloudMap = value;
    }
    public resetAwsCloudMap() {
      this._awsCloudMap = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsCloudMapInput() {
      return this._awsCloudMap
    }

    // dns - computed: false, optional: true, required: false
    private _dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns | undefined; 
    private __dnsOutput = new AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference(this as any, "dns", true);
    public get dns() {
      return this.__dnsOutput;
    }
    public putDns(value: AppmeshVirtualNodeSpecServiceDiscoveryDns | undefined) {
      this._dns = value;
    }
    public resetDns() {
      this._dns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsInput() {
      return this._dns
    }
  }
  export interface AppmeshVirtualNodeSpec {
    /**
    * backend block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend AppmeshVirtualNode#backend}
    */
    readonly backend?: AppmeshVirtualNodeSpecBackend[];
    /**
    * backend_defaults block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend_defaults AppmeshVirtualNode#backend_defaults}
    */
    readonly backendDefaults?: AppmeshVirtualNodeSpecBackendDefaults;
    /**
    * listener block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#listener AppmeshVirtualNode#listener}
    */
    readonly listener?: AppmeshVirtualNodeSpecListener;
    /**
    * logging block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#logging AppmeshVirtualNode#logging}
    */
    readonly logging?: AppmeshVirtualNodeSpecLogging;
    /**
    * service_discovery block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_discovery AppmeshVirtualNode#service_discovery}
    */
    readonly serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery;
  }

  function appmeshVirtualNodeSpecToTerraform(struct?: AppmeshVirtualNodeSpecOutputReference | AppmeshVirtualNodeSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      backend: cdktf.listMapper(appmeshVirtualNodeSpecBackendToTerraform)(struct!.backend),
      backend_defaults: appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct!.backendDefaults),
      listener: appmeshVirtualNodeSpecListenerToTerraform(struct!.listener),
      logging: appmeshVirtualNodeSpecLoggingToTerraform(struct!.logging),
      service_discovery: appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct!.serviceDiscovery),
    }
  }

  export class AppmeshVirtualNodeSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // backend - computed: false, optional: true, required: false
    private _backend?: AppmeshVirtualNodeSpecBackend[] | undefined; 
    public get backend() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('backend') as any;
    }
    public set backend(value: AppmeshVirtualNodeSpecBackend[] | undefined) {
      this._backend = value;
    }
    public resetBackend() {
      this._backend = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backendInput() {
      return this._backend
    }

    // backend_defaults - computed: false, optional: true, required: false
    private _backendDefaults?: AppmeshVirtualNodeSpecBackendDefaults | undefined; 
    private __backendDefaultsOutput = new AppmeshVirtualNodeSpecBackendDefaultsOutputReference(this as any, "backend_defaults", true);
    public get backendDefaults() {
      return this.__backendDefaultsOutput;
    }
    public putBackendDefaults(value: AppmeshVirtualNodeSpecBackendDefaults | undefined) {
      this._backendDefaults = value;
    }
    public resetBackendDefaults() {
      this._backendDefaults = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backendDefaultsInput() {
      return this._backendDefaults
    }

    // listener - computed: false, optional: true, required: false
    private _listener?: AppmeshVirtualNodeSpecListener | undefined; 
    private __listenerOutput = new AppmeshVirtualNodeSpecListenerOutputReference(this as any, "listener", true);
    public get listener() {
      return this.__listenerOutput;
    }
    public putListener(value: AppmeshVirtualNodeSpecListener | undefined) {
      this._listener = value;
    }
    public resetListener() {
      this._listener = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerInput() {
      return this._listener
    }

    // logging - computed: false, optional: true, required: false
    private _logging?: AppmeshVirtualNodeSpecLogging | undefined; 
    private __loggingOutput = new AppmeshVirtualNodeSpecLoggingOutputReference(this as any, "logging", true);
    public get logging() {
      return this.__loggingOutput;
    }
    public putLogging(value: AppmeshVirtualNodeSpecLogging | undefined) {
      this._logging = value;
    }
    public resetLogging() {
      this._logging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInput() {
      return this._logging
    }

    // service_discovery - computed: false, optional: true, required: false
    private _serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery | undefined; 
    private __serviceDiscoveryOutput = new AppmeshVirtualNodeSpecServiceDiscoveryOutputReference(this as any, "service_discovery", true);
    public get serviceDiscovery() {
      return this.__serviceDiscoveryOutput;
    }
    public putServiceDiscovery(value: AppmeshVirtualNodeSpecServiceDiscovery | undefined) {
      this._serviceDiscovery = value;
    }
    public resetServiceDiscovery() {
      this._serviceDiscovery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceDiscoveryInput() {
      return this._serviceDiscovery
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node}
  */
  export class AppmeshVirtualNode extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_virtual_node";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualNodeConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshVirtualNodeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_virtual_node',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._meshName = config.meshName;
      this._meshOwner = config.meshOwner;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._spec = config.spec;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
    }

    // mesh_name - computed: false, optional: false, required: true
    private _meshName?: string; 
    public get meshName() {
      return this.getStringAttribute('mesh_name');
    }
    public set meshName(value: string) {
      this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get meshNameInput() {
      return this._meshName
    }

    // mesh_owner - computed: true, optional: true, required: false
    private _meshOwner?: string | undefined; 
    public get meshOwner() {
      return this.getStringAttribute('mesh_owner');
    }
    public set meshOwner(value: string | undefined) {
      this._meshOwner = value;
    }
    public resetMeshOwner() {
      this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get meshOwnerInput() {
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // resource_owner - computed: true, optional: false, required: false
    public get resourceOwner() {
      return this.getStringAttribute('resource_owner');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // spec - computed: false, optional: false, required: true
    private _spec?: AppmeshVirtualNodeSpec; 
    private __specOutput = new AppmeshVirtualNodeSpecOutputReference(this as any, "spec", true);
    public get spec() {
      return this.__specOutput;
    }
    public putSpec(value: AppmeshVirtualNodeSpec) {
      this._spec = value;
    }
    // Temporarily expose input value. Use with caution.
    public get specInput() {
      return this._spec
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        mesh_name: cdktf.stringToTerraform(this._meshName),
        mesh_owner: cdktf.stringToTerraform(this._meshOwner),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        spec: appmeshVirtualNodeSpecToTerraform(this._spec),
      };
    }
  }
  export interface AppmeshVirtualRouterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#mesh_name AppmeshVirtualRouter#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#mesh_owner AppmeshVirtualRouter#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#name AppmeshVirtualRouter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#tags AppmeshVirtualRouter#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#tags_all AppmeshVirtualRouter#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#spec AppmeshVirtualRouter#spec}
    */
    readonly spec: AppmeshVirtualRouterSpec;
  }
  export interface AppmeshVirtualRouterSpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#port AppmeshVirtualRouter#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#protocol AppmeshVirtualRouter#protocol}
    */
    readonly protocol: string;
  }

  function appmeshVirtualRouterSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualRouterSpecListenerPortMappingOutputReference | AppmeshVirtualRouterSpecListenerPortMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      port: cdktf.numberToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
    }
  }

  export class AppmeshVirtualRouterSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // port - computed: false, optional: false, required: true
    private _port?: number; 
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number) {
      this._port = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }
  }
  export interface AppmeshVirtualRouterSpecListener {
    /**
    * port_mapping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#port_mapping AppmeshVirtualRouter#port_mapping}
    */
    readonly portMapping: AppmeshVirtualRouterSpecListenerPortMapping;
  }

  function appmeshVirtualRouterSpecListenerToTerraform(struct?: AppmeshVirtualRouterSpecListenerOutputReference | AppmeshVirtualRouterSpecListener): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      port_mapping: appmeshVirtualRouterSpecListenerPortMappingToTerraform(struct!.portMapping),
    }
  }

  export class AppmeshVirtualRouterSpecListenerOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // port_mapping - computed: false, optional: false, required: true
    private _portMapping?: AppmeshVirtualRouterSpecListenerPortMapping; 
    private __portMappingOutput = new AppmeshVirtualRouterSpecListenerPortMappingOutputReference(this as any, "port_mapping", true);
    public get portMapping() {
      return this.__portMappingOutput;
    }
    public putPortMapping(value: AppmeshVirtualRouterSpecListenerPortMapping) {
      this._portMapping = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portMappingInput() {
      return this._portMapping
    }
  }
  export interface AppmeshVirtualRouterSpec {
    /**
    * listener block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#listener AppmeshVirtualRouter#listener}
    */
    readonly listener: AppmeshVirtualRouterSpecListener;
  }

  function appmeshVirtualRouterSpecToTerraform(struct?: AppmeshVirtualRouterSpecOutputReference | AppmeshVirtualRouterSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      listener: appmeshVirtualRouterSpecListenerToTerraform(struct!.listener),
    }
  }

  export class AppmeshVirtualRouterSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // listener - computed: false, optional: false, required: true
    private _listener?: AppmeshVirtualRouterSpecListener; 
    private __listenerOutput = new AppmeshVirtualRouterSpecListenerOutputReference(this as any, "listener", true);
    public get listener() {
      return this.__listenerOutput;
    }
    public putListener(value: AppmeshVirtualRouterSpecListener) {
      this._listener = value;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerInput() {
      return this._listener
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router}
  */
  export class AppmeshVirtualRouter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_virtual_router";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualRouterConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshVirtualRouterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_virtual_router',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._meshName = config.meshName;
      this._meshOwner = config.meshOwner;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._spec = config.spec;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
    }

    // mesh_name - computed: false, optional: false, required: true
    private _meshName?: string; 
    public get meshName() {
      return this.getStringAttribute('mesh_name');
    }
    public set meshName(value: string) {
      this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get meshNameInput() {
      return this._meshName
    }

    // mesh_owner - computed: true, optional: true, required: false
    private _meshOwner?: string | undefined; 
    public get meshOwner() {
      return this.getStringAttribute('mesh_owner');
    }
    public set meshOwner(value: string | undefined) {
      this._meshOwner = value;
    }
    public resetMeshOwner() {
      this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get meshOwnerInput() {
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // resource_owner - computed: true, optional: false, required: false
    public get resourceOwner() {
      return this.getStringAttribute('resource_owner');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // spec - computed: false, optional: false, required: true
    private _spec?: AppmeshVirtualRouterSpec; 
    private __specOutput = new AppmeshVirtualRouterSpecOutputReference(this as any, "spec", true);
    public get spec() {
      return this.__specOutput;
    }
    public putSpec(value: AppmeshVirtualRouterSpec) {
      this._spec = value;
    }
    // Temporarily expose input value. Use with caution.
    public get specInput() {
      return this._spec
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        mesh_name: cdktf.stringToTerraform(this._meshName),
        mesh_owner: cdktf.stringToTerraform(this._meshOwner),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        spec: appmeshVirtualRouterSpecToTerraform(this._spec),
      };
    }
  }
  export interface AppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#mesh_name AppmeshVirtualService#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#mesh_owner AppmeshVirtualService#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#name AppmeshVirtualService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#tags AppmeshVirtualService#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#tags_all AppmeshVirtualService#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#spec AppmeshVirtualService#spec}
    */
    readonly spec: AppmeshVirtualServiceSpec;
  }
  export interface AppmeshVirtualServiceSpecProviderVirtualNode {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_node_name AppmeshVirtualService#virtual_node_name}
    */
    readonly virtualNodeName: string;
  }

  function appmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference | AppmeshVirtualServiceSpecProviderVirtualNode): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_node_name: cdktf.stringToTerraform(struct!.virtualNodeName),
    }
  }

  export class AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // virtual_node_name - computed: false, optional: false, required: true
    private _virtualNodeName?: string; 
    public get virtualNodeName() {
      return this.getStringAttribute('virtual_node_name');
    }
    public set virtualNodeName(value: string) {
      this._virtualNodeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualNodeNameInput() {
      return this._virtualNodeName
    }
  }
  export interface AppmeshVirtualServiceSpecProviderVirtualRouter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_router_name AppmeshVirtualService#virtual_router_name}
    */
    readonly virtualRouterName: string;
  }

  function appmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference | AppmeshVirtualServiceSpecProviderVirtualRouter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_router_name: cdktf.stringToTerraform(struct!.virtualRouterName),
    }
  }

  export class AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // virtual_router_name - computed: false, optional: false, required: true
    private _virtualRouterName?: string; 
    public get virtualRouterName() {
      return this.getStringAttribute('virtual_router_name');
    }
    public set virtualRouterName(value: string) {
      this._virtualRouterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualRouterNameInput() {
      return this._virtualRouterName
    }
  }
  export interface AppmeshVirtualServiceSpecProvider {
    /**
    * virtual_node block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_node AppmeshVirtualService#virtual_node}
    */
    readonly virtualNode?: AppmeshVirtualServiceSpecProviderVirtualNode;
    /**
    * virtual_router block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_router AppmeshVirtualService#virtual_router}
    */
    readonly virtualRouter?: AppmeshVirtualServiceSpecProviderVirtualRouter;
  }

  function appmeshVirtualServiceSpecProviderToTerraform(struct?: AppmeshVirtualServiceSpecProviderOutputReference | AppmeshVirtualServiceSpecProvider): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      virtual_node: appmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct!.virtualNode),
      virtual_router: appmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct!.virtualRouter),
    }
  }

  export class AppmeshVirtualServiceSpecProviderOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // virtual_node - computed: false, optional: true, required: false
    private _virtualNode?: AppmeshVirtualServiceSpecProviderVirtualNode | undefined; 
    private __virtualNodeOutput = new AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference(this as any, "virtual_node", true);
    public get virtualNode() {
      return this.__virtualNodeOutput;
    }
    public putVirtualNode(value: AppmeshVirtualServiceSpecProviderVirtualNode | undefined) {
      this._virtualNode = value;
    }
    public resetVirtualNode() {
      this._virtualNode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualNodeInput() {
      return this._virtualNode
    }

    // virtual_router - computed: false, optional: true, required: false
    private _virtualRouter?: AppmeshVirtualServiceSpecProviderVirtualRouter | undefined; 
    private __virtualRouterOutput = new AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference(this as any, "virtual_router", true);
    public get virtualRouter() {
      return this.__virtualRouterOutput;
    }
    public putVirtualRouter(value: AppmeshVirtualServiceSpecProviderVirtualRouter | undefined) {
      this._virtualRouter = value;
    }
    public resetVirtualRouter() {
      this._virtualRouter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualRouterInput() {
      return this._virtualRouter
    }
  }
  export interface AppmeshVirtualServiceSpec {
    /**
    * provider block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#provider AppmeshVirtualService#provider}
    */
    readonly provider?: AppmeshVirtualServiceSpecProvider;
  }

  function appmeshVirtualServiceSpecToTerraform(struct?: AppmeshVirtualServiceSpecOutputReference | AppmeshVirtualServiceSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      provider: appmeshVirtualServiceSpecProviderToTerraform(struct!.provider),
    }
  }

  export class AppmeshVirtualServiceSpecOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // provider - computed: false, optional: true, required: false
    private _provider?: AppmeshVirtualServiceSpecProvider | undefined; 
    private __providerOutput = new AppmeshVirtualServiceSpecProviderOutputReference(this as any, "provider", true);
    public get provider() {
      return this.__providerOutput;
    }
    public putProvider(value: AppmeshVirtualServiceSpecProvider | undefined) {
      this._provider = value;
    }
    public resetProvider() {
      this._provider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerInput() {
      return this._provider
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service}
  */
  export class AppmeshVirtualService extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_virtual_service";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualServiceConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshVirtualServiceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_virtual_service',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._meshName = config.meshName;
      this._meshOwner = config.meshOwner;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._spec = config.spec;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
    }

    // mesh_name - computed: false, optional: false, required: true
    private _meshName?: string; 
    public get meshName() {
      return this.getStringAttribute('mesh_name');
    }
    public set meshName(value: string) {
      this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get meshNameInput() {
      return this._meshName
    }

    // mesh_owner - computed: true, optional: true, required: false
    private _meshOwner?: string | undefined; 
    public get meshOwner() {
      return this.getStringAttribute('mesh_owner');
    }
    public set meshOwner(value: string | undefined) {
      this._meshOwner = value;
    }
    public resetMeshOwner() {
      this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get meshOwnerInput() {
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // resource_owner - computed: true, optional: false, required: false
    public get resourceOwner() {
      return this.getStringAttribute('resource_owner');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // spec - computed: false, optional: false, required: true
    private _spec?: AppmeshVirtualServiceSpec; 
    private __specOutput = new AppmeshVirtualServiceSpecOutputReference(this as any, "spec", true);
    public get spec() {
      return this.__specOutput;
    }
    public putSpec(value: AppmeshVirtualServiceSpec) {
      this._spec = value;
    }
    // Temporarily expose input value. Use with caution.
    public get specInput() {
      return this._spec
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        mesh_name: cdktf.stringToTerraform(this._meshName),
        mesh_owner: cdktf.stringToTerraform(this._meshOwner),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        spec: appmeshVirtualServiceSpecToTerraform(this._spec),
      };
    }
  }
  export interface DataAwsAppmeshMeshConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html#mesh_owner DataAwsAppmeshMesh#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html#name DataAwsAppmeshMesh#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html#tags DataAwsAppmeshMesh#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsAppmeshMeshSpecEgressFilter extends cdktf.ComplexComputedList {

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }
  }
  export class DataAwsAppmeshMeshSpec extends cdktf.ComplexComputedList {

    // egress_filter - computed: true, optional: false, required: false
    public get egressFilter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('egress_filter') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html aws_appmesh_mesh}
  */
  export class DataAwsAppmeshMesh extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_mesh";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html aws_appmesh_mesh} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshMeshConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsAppmeshMeshConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_mesh',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._meshOwner = config.meshOwner;
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
    }

    // mesh_owner - computed: true, optional: true, required: false
    private _meshOwner?: string | undefined; 
    public get meshOwner() {
      return this.getStringAttribute('mesh_owner');
    }
    public set meshOwner(value: string | undefined) {
      this._meshOwner = value;
    }
    public resetMeshOwner() {
      this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get meshOwnerInput() {
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // resource_owner - computed: true, optional: false, required: false
    public get resourceOwner() {
      return this.getStringAttribute('resource_owner');
    }

    // spec - computed: true, optional: false, required: false
    public spec(index: string) {
      return new DataAwsAppmeshMeshSpec(this, 'spec', index);
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        mesh_owner: cdktf.stringToTerraform(this._meshOwner),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsAppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#mesh_name DataAwsAppmeshVirtualService#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#mesh_owner DataAwsAppmeshVirtualService#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#name DataAwsAppmeshVirtualService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#tags DataAwsAppmeshVirtualService#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsAppmeshVirtualServiceSpecProviderVirtualNode extends cdktf.ComplexComputedList {

    // virtual_node_name - computed: true, optional: false, required: false
    public get virtualNodeName() {
      return this.getStringAttribute('virtual_node_name');
    }
  }
  export class DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter extends cdktf.ComplexComputedList {

    // virtual_router_name - computed: true, optional: false, required: false
    public get virtualRouterName() {
      return this.getStringAttribute('virtual_router_name');
    }
  }
  export class DataAwsAppmeshVirtualServiceSpecProvider extends cdktf.ComplexComputedList {

    // virtual_node - computed: true, optional: false, required: false
    public get virtualNode() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('virtual_node') as any;
    }

    // virtual_router - computed: true, optional: false, required: false
    public get virtualRouter() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('virtual_router') as any;
    }
  }
  export class DataAwsAppmeshVirtualServiceSpec extends cdktf.ComplexComputedList {

    // provider - computed: true, optional: false, required: false
    public get provider() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('provider') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html aws_appmesh_virtual_service}
  */
  export class DataAwsAppmeshVirtualService extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_virtual_service";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html aws_appmesh_virtual_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshVirtualServiceConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsAppmeshVirtualServiceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_virtual_service',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._meshName = config.meshName;
      this._meshOwner = config.meshOwner;
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
    }

    // mesh_name - computed: false, optional: false, required: true
    private _meshName?: string; 
    public get meshName() {
      return this.getStringAttribute('mesh_name');
    }
    public set meshName(value: string) {
      this._meshName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get meshNameInput() {
      return this._meshName
    }

    // mesh_owner - computed: true, optional: true, required: false
    private _meshOwner?: string | undefined; 
    public get meshOwner() {
      return this.getStringAttribute('mesh_owner');
    }
    public set meshOwner(value: string | undefined) {
      this._meshOwner = value;
    }
    public resetMeshOwner() {
      this._meshOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get meshOwnerInput() {
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // resource_owner - computed: true, optional: false, required: false
    public get resourceOwner() {
      return this.getStringAttribute('resource_owner');
    }

    // spec - computed: true, optional: false, required: false
    public spec(index: string) {
      return new DataAwsAppmeshVirtualServiceSpec(this, 'spec', index);
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        mesh_name: cdktf.stringToTerraform(this._meshName),
        mesh_owner: cdktf.stringToTerraform(this._meshOwner),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
